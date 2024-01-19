import { Component, OnDestroy, OnInit } from "@angular/core";
import { Ingredient } from "../../models/ingredient.model";
import { ShoppingListService } from "../../services/shopping-list.service";
import { Subscription } from "rxjs";

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients: Ingredient[] = [];
    private subscription!: Subscription;

	constructor(private slService: ShoppingListService) { }

	ngOnInit() {
		this.ingredients = this.slService.getIngredients();
		this.subscription = this.slService.ingredientsChanged.subscribe(
			(updatedIngredients) => {
				this.ingredients = updatedIngredients;
			}
		)
	}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}