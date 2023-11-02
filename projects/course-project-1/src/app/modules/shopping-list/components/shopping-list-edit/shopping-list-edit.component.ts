import { Component } from "@angular/core";
import { unitsOfMeasure } from "../../models/ingredient.model";


@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
	unitsOfMeasure = unitsOfMeasure;

}