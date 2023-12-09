import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	private ingredients: Ingredient[] = [
		new Ingredient('batata', 1, 'un'),
	];

	getIngredients() {
		// returns a shallow copy of ingredients, thus it's a new Array object, but
		// it's elements are the same from ingredients (same reference).
		// A deep copy would be better but this will do for now.
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients);
	}

	removeIngredient(ingredient: Ingredient) {
		const ingredientIndex = this.ingredients.indexOf(ingredient)

		// if ingredient is not among ingredients, the return index above will be -1
		if (ingredientIndex > -1) {
			this.ingredients.splice(ingredientIndex, 1);
			this.ingredientsChanged.emit(this.ingredients);
		}
	}

	editIngredient<K extends keyof Ingredient>(ingredient: Ingredient, key: K, newValue: Ingredient[K]) {
		const ingredientIndex = this.ingredients.indexOf(ingredient);

		// if ingredient is not among ingredients, the return index above will be -1
		if (ingredientIndex > -1) {
			this.ingredients[ingredientIndex][key] = newValue;
			this.ingredientsChanged.emit(this.ingredients);
		}
	}
}