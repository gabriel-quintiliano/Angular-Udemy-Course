import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    recipe!: Recipe;
    recipeId!: number;

    constructor( private recipeService: RecipeService,
                 private route: ActivatedRoute,
                 private router: Router ) {}

    ngOnInit() {
        // Meanwhile it's this component is being loaded by a route with no guards,
        // thus the user could really pass an id that doesn't exist, but later it
        // will be properly fixed
        this.route.params.subscribe( (params: Params) => {
            this.recipeId = Number(params['recipe-id']);
            this.recipe = this.recipeService.getRecipe(this.recipeId)!;
        })
    }

    onAddToShoppingList() {
        this.recipeService.addToShoppingList(this.recipe.ingredients)
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.recipeId);

        // So from this moment on, as a recipe has been deleted, this means the recipes array
        // within RecipeService has changed (as well as the RecipeListComponent's template),
        // so for example if we have delete the recipe with id 1, now the recipe that previouly
        // had id 2 is now recipe with id 1, thus, we better reload the current url, which will
        // run all the route guards again, to make sure the most up to date data is being displayed.
        //
        // To do that, we gotta leave the current route just to get back to it, otherwise Angular
        // won't actually reload that (for example, `this.router.navigate(['./'], {relativeTo: this.route})`
        // wouldn't work, because Angular won't just reload this route that is already loaded)

        const currentUrl = this.router.url;

        // Silently navigates to root just to get back to the current route again. And doing this,
        // the `IsValidRecipeIdGuard` will take care of the recipe-id and figure out if it still
        // represents a recipe or if it's out of the bounds the recipes array from RecipeService.
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigateByUrl(currentUrl);
        });
    }
}
