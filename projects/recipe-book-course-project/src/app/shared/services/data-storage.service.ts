import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../../modules/recipe-book/services/recipe.service';
import { Recipe } from '../../modules/recipe-book/models/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();

        /* The Firebase Realtime Db (restful api) will handle a PUT request as following:
         * It will replace all the data on that end point with the new data and this new
         * data will be saved in the db as it is, in this case no firebase id or similar
         * will be created (it only happens with POST resquests).
         * 
         * PUT requests are generally used to update data that already in the server, thus
         * Firebase understands that you know what you're doing and doesn't mess with the
         * format of the request's payload, it just saves it. */
        this.http.put('https://recipe-book-course-proje-e55ad-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe();
    }

    fetchRecipes() {
        this.http.get<Recipe[] | null>('https://recipe-book-course-proje-e55ad-default-rtdb.firebaseio.com/recipes.json')
        .subscribe(recipes => {
            /* if there are no recipes stored in the end point, instead of [], the return
             * value in the http reponse body will be `null`, so remember to check for that. */
            if (recipes) { // or check `if (recipes !== null)`
                this.recipeService.setRecipes(recipes);
            } else {
                this.recipeService.setRecipes([]);
            }
        });
    }
}
