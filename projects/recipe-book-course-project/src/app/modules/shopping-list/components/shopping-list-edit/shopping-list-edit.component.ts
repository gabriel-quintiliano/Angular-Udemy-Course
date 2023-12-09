import { Component, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { Ingredient, UnitOfMeasureUnion, unitsOfMeasure } from "../../models/ingredient.model";
import { ShoppingListService } from "../../services/shopping-list.service";

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

	constructor(private renderer: Renderer2, private slService: ShoppingListService) { }

	onIngredientAdded() {

		const ingName = this.nameInputElem.nativeElement.value;
		const ingAmount = Number(this.amountInputElem.nativeElement.value);
		const ingUnitOfMeasure = this.unitOfMeasureSelectElem.nativeElement.selectedOptions[0].textContent! as UnitOfMeasureUnion;

		this.slService.addIngredient(new Ingredient(ingName, ingAmount, ingUnitOfMeasure));

		this.renderer.setProperty(this.nameInputElem.nativeElement, 'value', ''); // reset name input
		this.renderer.setProperty(this.amountInputElem.nativeElement, 'value', ''); // reset name input
	}
}