import { Component } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
	ingredients: Ingredient[] = [
		new Ingredient('batata', 1, 'un'),
	];

	onIngredientAdded(ingredient: Ingredient) {
		this.ingredients.push(ingredient)
	}
}