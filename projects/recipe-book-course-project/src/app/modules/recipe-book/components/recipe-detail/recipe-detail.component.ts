import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
	@Input({ alias: 'recipeDetail', required: true }) recipe!: Recipe;

    constructor(private recipeService: RecipeService) {}

    onAddToShoppingList() {
        this.recipeService.addToShoppingList(this.recipe.ingredients)
    }
}
