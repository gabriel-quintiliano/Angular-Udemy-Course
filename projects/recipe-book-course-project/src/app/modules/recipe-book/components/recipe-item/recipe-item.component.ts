import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
	@Input({ alias: 'recipeInfo', required: true }) recipe!: Recipe;

}
