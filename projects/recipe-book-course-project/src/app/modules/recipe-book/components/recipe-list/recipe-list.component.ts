import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
	recipes!: Recipe[];

	constructor(private recipeService: RecipeService) { }

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();
	}

	onSelect(recipe: Recipe) {
		this.recipeService.recipeSelected.emit(recipe);
	}
}
