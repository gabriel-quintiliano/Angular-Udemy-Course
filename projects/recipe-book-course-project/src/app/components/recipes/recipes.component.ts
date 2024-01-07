import { Component } from '@angular/core';
import { RecipeService } from '../../modules/recipe-book/services/recipe.service'
import { Recipe } from '../../modules/recipe-book/models/recipe.model'

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
	selectedRecipe?: Recipe;

	constructor(private recipeService: RecipeService) { }

	ngOnInit() {
		// sets the recipe which was selected in recipe-list component from recipe-book module
		this.recipeService.recipeSelected.subscribe((recipe) => {
			this.selectedRecipe = recipe;
		})
	}
}
