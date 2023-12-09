import { Component } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
	ingredients: Ingredient[] = [];

	constructor(private slService: ShoppingListService) { }

	ngOnInit() {
		this.ingredients = this.slService.getIngredients();
		this.slService.ingredientsChanged.subscribe(
			(updatedIngredients) => {
				this.ingredients = updatedIngredients;
			}
		)
	}
}