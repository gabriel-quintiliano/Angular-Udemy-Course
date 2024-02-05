import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
	private ingredients: Ingredient[] = [
		new Ingredient('batata', 1, 'un'),
	];

    getIngredient(index: number): Ingredient | undefined {
        return this.ingredients[index];
    }

	getIngredients() {
		// returns a shallow copy of ingredients, thus it's a new Array object, but
		// it's elements are the same from ingredients (same reference).
		// A deep copy would be better but this will do for now.
		return this.ingredients.slice();
	}

    private _addIngredient(ingredient: Ingredient) {
        const ingIndexInIgredientsArray = this.ingredients.findIndex( ing => ingredient.name === ing.name)

        if (ingIndexInIgredientsArray != -1) {
            // if the ingredient to be added is already in the ingredients arrays, just update amount
            this.ingredients[ingIndexInIgredientsArray].amount += ingredient.amount;
        } else {
            // if its not, then add it
            this.ingredients.push(ingredient);
        }
    }

	addIngredient(ingredient: Ingredient) {
        this._addIngredient(ingredient);

		this.ingredientsChanged.next(this.ingredients);
	}
    
    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            this._addIngredient(ingredient);
        }
        
        this.ingredientsChanged.next(this.ingredients);
    }

	removeIngredient(ingredient: Ingredient) {
		const ingredientIndex = this.ingredients.indexOf(ingredient)

		// if ingredient is not among ingredients, the return index above will be -1
		if (ingredientIndex > -1) {
			this.ingredients.splice(ingredientIndex, 1);
			this.ingredientsChanged.next(this.ingredients);
		}
	}

	editIngredient<K extends keyof Ingredient>(ingredient: Ingredient, key: K, newValue: Ingredient[K]) {
		const ingredientIndex = this.ingredients.indexOf(ingredient);

		// if ingredient is not among ingredients, the return index above will be -1
		if (ingredientIndex > -1) {
			this.ingredients[ingredientIndex][key] = newValue;
			this.ingredientsChanged.next(this.ingredients);
		}
	}
}