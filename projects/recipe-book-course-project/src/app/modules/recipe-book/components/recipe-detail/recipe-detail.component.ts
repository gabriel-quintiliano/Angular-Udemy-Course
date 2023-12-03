import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model'

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
	@Input({ alias: 'recipeDetail', required: true }) recipe!: Recipe;
}
