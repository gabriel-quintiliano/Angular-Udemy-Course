import { Component, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Ingredient, UnitOfMeasureUnion, unitsOfMeasure } from "../../models/ingredient.model";
import { ShoppingListService } from "../../services/shopping-list.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "projects/recipe-book-course-project/src/app/validators/custom.validators";
import { Subscription } from "rxjs";

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {
    private subscription!: Subscription;
    protected editMode = false; // protected so the html template can access it
    private editedIgredientIndex!: number;
    private editedIgredient?: Ingredient;

	unitsOfMeasure = unitsOfMeasure; // so that I can use this imported object in the component's template
    ingredientForm = new FormGroup({
        name: new FormControl('', {nonNullable: true, validators: Validators.required}),
        amount: new FormControl(1, {nonNullable: true, validators: [
            Validators.required,
            Validators.min(1),
            CustomValidators.number
        ]}),
        unitOfMeasure: new FormControl<UnitOfMeasureUnion>('un', {nonNullable: true, validators: Validators.required})
    })

    // The same FormGroup above could be created using the NonNullableFormBuilder as:
    // ingredientForm2 = this.nnfb.group({
    //     name: ['', Validators.required],
    //     amount: [1, [Validators.required, Validators.min(1), CustomValidators.number]],
    //     unitOfMeasure: this.nnfb.control<UnitOfMeasureUnion>('un', Validators.required)
    // })
    //
    // don't forget to inject or instanciate the NonNullableFormBuilder class as nnfb (or any other identifier)

	constructor(private slService: ShoppingListService) { }

    ngOnInit() {
        this.subscription = this.slService.startedEditing.subscribe((index: number) => {
            this.editedIgredientIndex = index;
            this.editedIgredient = this.slService.getIngredient(index);
            this.editMode = true;

            if (!this.editedIgredient) throw new Error('Edit mode: No valid ingredient found')

            this.ingredientForm.setValue({
                name: this.editedIgredient.name,
                amount: this.editedIgredient.amount,
                unitOfMeasure: this.editedIgredient.unitOfMeasure
            })
        })
    }

    onSubmit() {
        if (this.editMode) {
            this.onIngredientUpdated()
        } else {
            this.onIngredientAdded()
        }

        this.ingredientForm.reset()
    }

	onIngredientAdded() {
        if (!this.ingredientForm.valid) {
            return
        }

		const ingName = this.ingredientForm.get('name')!.value;
		const ingAmount = this.ingredientForm.get('amount')!.value;
		const ingUnitOfMeasure = this.ingredientForm.get('unitOfMeasure')!.value;

		this.slService.addIngredient(new Ingredient(ingName, ingAmount, ingUnitOfMeasure));
	}

    onIngredientUpdated() {
        if (!this.ingredientForm.valid) {
            return
        }

		const name = this.ingredientForm.get('name')!.value;
		const amount = this.ingredientForm.get('amount')!.value;
		const unitOfMeasure = this.ingredientForm.get('unitOfMeasure')!.value;

		this.slService.editIngredient(this.editedIgredientIndex, {name, amount, unitOfMeasure});
        this.editMode = false;
	}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}