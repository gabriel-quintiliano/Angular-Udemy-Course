import { Component, Renderer2 } from "@angular/core";
import { Ingredient, UnitOfMeasureUnion, unitsOfMeasure } from "../../models/ingredient.model";
import { ShoppingListService } from "../../services/shopping-list.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
	unitsOfMeasure = unitsOfMeasure; // so that I can use this imported object in the component's template

    ingredientForm = new FormGroup({
        name: new FormControl('', {nonNullable: true, validators: Validators.required}),
        amount: new FormControl(1, {nonNullable: true, validators: Validators.required}),
        unitOfMeasure: new FormControl<UnitOfMeasureUnion>('un', {nonNullable: true, validators: Validators.required})
    })

    // The same FormGroup above could be created using the NonNullableFormBuilder as:
    // ingredientForm2 = this.nnfb.group({
    //     name: ['', Validators.required],
    //     amount: [1, Validators.required],
    //     unitOfMeasure: this.nnfb.control<UnitOfMeasureUnion>('un', Validators.required)
    // })
    //
    // don't forget to inject or instanciate the NonNullableFormBuilder class as nnfb (or any other identifier)


	constructor(private slService: ShoppingListService) { }

	onIngredientAdded() {

		const ingName = this.ingredientForm.get('name')!.value;
		const ingAmount = this.ingredientForm.get('amount')!.value;
		const ingUnitOfMeasure = this.ingredientForm.get('unitOfMeasure')!.value;

		this.slService.addIngredient(new Ingredient(ingName, ingAmount, ingUnitOfMeasure));
	}
}