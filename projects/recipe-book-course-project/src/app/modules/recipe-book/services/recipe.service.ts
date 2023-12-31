import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../../shopping-list/models/ingredient.model';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Batatas Hasselback',
			'Batatas frtas e recheadas deliciosas',
			'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg',
			[
				new Ingredient('batata', 2, 'un'),
				new Ingredient('cheese', 200, 'g'),
			]
		),
		new Recipe(
			'Receita avc',
			'Batatas frtas e recheadas deliciosas',
			'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg',
			[
				new Ingredient('batata', 2, 'un'),
				new Ingredient('cheese', 200, 'g'),
			]
		),
		new Recipe(
			'Abcate gratinado',
			'Batatas frtas e recheadas deliciosas',
			'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg',
			[
				new Ingredient('batata', 2, 'un'),
				new Ingredient('cheese', 200, 'g'),
			]
		),
		new Recipe(
			'Banana com xia',
			'Batatas frtas e recheadas deliciosas',
			'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg',
			[
				new Ingredient('batata', 2, 'un'),
				new Ingredient('cheese', 200, 'g'),
			]
		)
	]

	getRecipes() {
		// the slice method will return a shallow copy of the recipes array, therefor it'll be a new array
		// but with the element will be exactly the same as in the recipes array (i.e. the reference to the
		// same objects, so altering these in the copy will reflect on recipes because it's the same object)
		return this.recipes.slice();
	}
}
