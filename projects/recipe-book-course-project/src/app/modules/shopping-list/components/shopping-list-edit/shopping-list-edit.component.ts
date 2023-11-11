import { Component, ElementRef, ViewChild } from "@angular/core";
import { unitsOfMeasure } from "../../models/ingredient.model";


@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
	unitsOfMeasure = unitsOfMeasure; // so that I can use this imported object in the component's template

	@ViewChild('nameInput') nameInputElem!: ElementRef<HTMLInputElement>;
	@ViewChild('amountInput') amountInputElem!: ElementRef<HTMLInputElement>;
	@ViewChild('unitOfMeasureSelect') unitOfMeasureSelectElem!: ElementRef<HTMLSelectElement>;
}