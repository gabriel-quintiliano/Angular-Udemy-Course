import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient, unitsOfMeasure } from '../../../shopping-list/models/ingredient.model';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { CustomValidators } from 'projects/recipe-book-course-project/src/app/validators/custom.validators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    protected unitsOfMeasure = unitsOfMeasure // add it here just so that we can access it in the template
    recipeId?: number;
    editMode = false;
    recipeForm = this.nnfb.group({
        'name': ['', Validators.required],
        'imagePath': ['', Validators.required],
        'description': ['', Validators.required],
        'ingredients': this.nnfb.array<ingredientSchema>([])
    })
    get recipeIngredients() {
        return this.recipeForm.get('ingredients') as FormArray<ingredientSchema>
    }

    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService,
                private nnfb: NonNullableFormBuilder) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            // yes, there should be a futher verification here if when recipeId is
            // not undefined, it's really a number or NaN; or run a guard before
            // actually loading this component
            this.recipeId = Number(params['recipe-id']);

            // if this component is loaded by `/new`, as there is no `recipe-id` param,
            // `params['recipe-id'] !== undefined` is false, so editMode = false.
            // As the only other path that can load this component is `/:recipe-id/edit`,
            // if there is a value for params['recipe-id'], this means we're are in editMode
            this.editMode = params['recipe-id'] !== undefined

            // the recipeForm will be updated every time the route params change
            this.updateRecipeFormState();
        })
    }
    
    // this method will update the recipeForm fields according to whether `editMode` = true
    // or false and the current recipe (`recipeId`) being edited
    updateRecipeFormState() {
        
        // if we're not in edit mode, this means we're adding a new recipe, and thus, the
        // previous form values must be discarded
        if (!this.editMode) {
            this.recipeForm.reset()
            return
        }
        
        // The non-null assertion bellow in `this.recipeId!` is because if we're in edit mode
        // it's certain that we have a recipeId set and there is no way it's `undefined`
        // (see the logic present in `ngOnInit` method)
        const recipe = this.recipeService.getRecipe(this.recipeId!);
        
        this.recipeForm.patchValue({
            name: recipe.name,
            imagePath: recipe.imagePath,
            description: recipe.description
        })

        // loops through the recipe ingredients and pushes their info into `ingredients`
        // FormArray within recipeForm
        for (let ingredient of recipe.ingredients) {
            this.onAddIngredient(new Ingredient(ingredient.name, ingredient.amount, ingredient.unitOfMeasure))
        }
    }

    onAddIngredient(ingredient?: Ingredient) {
        // if an Ingredient object is provided, we will push this ingredient to `ingredients` FormArray:
        if (ingredient) {
            this.recipeIngredients.push(this.ingredientFormGroupWithValidatorsBuilder(ingredient))
            return
        }

        // else, ingredient is `undefined`, we'll push an "empty" generic ingredient to `ingredients` FormArray:
        this.recipeIngredients.push(this.ingredientFormGroupWithValidatorsBuilder(
            new Ingredient('', 0, 'g')
        ))
    }

    // builder for creating a FormGroup whose controls have all necessary validators, to be pushed into
    // `ingredients` FormArray from recipeIngredient
    private ingredientFormGroupWithValidatorsBuilder(ingredient: Ingredient): ingredientSchema {
        return this.nnfb.group({
            name: [ingredient.name, Validators.required],
            amount: [ingredient.amount, [Validators.required, Validators.min(0.001), CustomValidators.number]],
            unitOfMeasure: [ingredient.unitOfMeasure, Validators.required]
        })
    }
}

// Schema to be used in the FormArray with recipeForm:
type ingredientSchema = FormGroup<{
    [key in keyof Ingredient]: FormControl<Ingredient[key]>
}>

// this code snippet above is equivalent to writing the bellow but safer as this
// way if we change anything in `Ingredients` type, it's gonna be reflected here as well.
// FormGroup<{
//     name: FormControl<string>;
//     amount: FormControl<number>;
//     unitOfMeasure: FormControl<"tbsp" | "tsp" | "c" | "tc" | "g" | "kg" | "ml" | "l" | "un" | "dz">;
// }>