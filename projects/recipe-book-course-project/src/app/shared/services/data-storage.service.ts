import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs';
import { AuthService } from '../../authentication/services/auth.service';
import { Recipe } from '../../modules/recipe-book/models/recipe.model';
import { RecipeService } from '../../modules/recipe-book/services/recipe.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService,
    ) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        
        this.authService.user
        .pipe(
            take(1),
            exhaustMap(user => {
                if (!user || !user.token) {
                    return this.http.put('https://recipe-book-course-proje-e55ad-default-rtdb.firebaseio.com/recipes.json', recipes)
                }
                return this.http.put(
                    'https://recipe-book-course-proje-e55ad-default-rtdb.firebaseio.com/recipes.json',
                    recipes,
                    { params: { auth: user.token } }
                )
            })
        )
        .subscribe();
    }

    fetchRecipes() {
        this.authService.user
        .pipe(
            // takes only the first value emited from `user` Subject and unsubscribes
            take(1),
            // subscribes to `user` Subject, maps its emitted value and returns a new Observable in place
            // thats the Observable that will be subscribed to in the end.
            exhaustMap(user => {
                if (!user || !user.token) {
                    return this.http.get<Recipe[] | null>('https://recipe-book-course-proje-e55ad-default-rtdb.firebaseio.com/recipes.json')
                }
                return this.http.get<Recipe[] | null>(
                    'https://recipe-book-course-proje-e55ad-default-rtdb.firebaseio.com/recipes.json',
                    { params: { auth: user.token } }
                )
            }),
            // Maps the values emitted by the "replacement" Observable
            map(recipes => {
                // see comment #2
                if (recipes) {
                    // see comment #3
                    return recipes.map(recipe => {
                        // see comment #4
                        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
                    })
                }
                // see comment #5
                return [];
            })
        )
        // Subscribes to the "replacement" Observable
        .subscribe(recipes => {
            this.recipeService.setRecipes(recipes);
        });
    }
}


/* COMMENTS:
 *
 * #1 - The Firebase Realtime Db (restful api) will handle a PUT request as following:
 * It will replace all the data on that end point with the new data and this new
 * data will be saved in the db as it is, in this case no firebase id or similar
 * will be created (it only happens with POST resquests).
 * 
 * PUT requests are generally used to update data that already in the server, thus
 * Firebase understands that you know what you're doing and doesn't mess with the
 * format of the request's payload, it just saves it.
 * 
 * 
 * #2 - If there are no recipes stored in the database, the reponse body will be `null`
 * instead of just `[]` so you better check that.
 * 
 * 
 * #3 - Now that we know there are actual recipes in the db, we get to check if those
 * do respect the expected data format (the `Recipes` type in this case), because
 * as the Firebase Realtime DB works, data like empty Arrays or Objects are just
 * discarded, thus for example if we'd earlier sent to to DB a recipe with no
 * ingredients added yet, which is a valid Recipes object, something like:
 * {name: ..., desription: ..., imagepath: ..., ingredients: []} this object
 * will be save as: {name: ..., desription: ..., imagepath: ...}, the ingredients
 * key is completely discarded.
 * 
 * 
 * #4 - We copy all properties of the recipe and overide the ingredients key value.
 * if the recipe has no ingredients key, `recipe.ingredients` === undefined,
 * thus as its falsy, [] will be set as value, otherwise the original value
 * for `recipe.ingredients` will be kept.
 * 
 * 
 * #5 - If there are no recipes in DB will just return [] as the original reponse
 * body value was `null`.
 * 
 * 
 * #6 -
 * */