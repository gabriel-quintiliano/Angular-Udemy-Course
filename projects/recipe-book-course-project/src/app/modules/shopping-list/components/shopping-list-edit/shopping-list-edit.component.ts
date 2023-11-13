import { Component, ElementRef, Output, ViewChild, EventEmitter } from "@angular/core";
import { Ingredient, UnitOfMeasureUnion, unitsOfMeasure } from "../../models/ingredient.model";


@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
	unitsOfMeasure = unitsOfMeasure; // so that I can use this imported object in the component's template

	@Output('ingredientAdded') sendNewIngredientInfo = new EventEmitter<Ingredient>();

	@ViewChild('nameInput') nameInputElem!: ElementRef<HTMLInputElement>;
	@ViewChild('amountInput') amountInputElem!: ElementRef<HTMLInputElement>;
	@ViewChild('unitOfMeasureSelect') unitOfMeasureSelectElem!: ElementRef<HTMLSelectElement>;

	onIngredientAdded() {

		const ingName = this.nameInputElem.nativeElement.value;
		const ingAmount = Number(this.amountInputElem.nativeElement.value);
		const ingUnitOfMeasure = this.unitOfMeasureSelectElem.nativeElement.selectedOptions[0].textContent! as UnitOfMeasureUnion;

		this.sendNewIngredientInfo.emit(new Ingredient(ingName, ingAmount, ingUnitOfMeasure))

		this.nameInputElem.nativeElement.value = ""; // reset name input
		this.amountInputElem.nativeElement.value = ""; // reset amount input
	}
}