import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    recipe!: Recipe;
    recipeId!: number;

    constructor( private recipeService: RecipeService,
                 private route: ActivatedRoute ) {}

    ngOnInit() {
        // Meanwhile it's this component is being loaded by a route with no guards,
        // thus the user could really pass an id that doesn't exist, but later it
        // will be properly fixed
        this.route.params.subscribe( (params: Params) => {
            this.recipeId = Number(params['recipe-id']);
            this.recipe = this.recipeService.getRecipe(this.recipeId);
        })
    }

    onAddToShoppingList() {
        this.recipeService.addToShoppingList(this.recipe.ingredients)
    }
}
