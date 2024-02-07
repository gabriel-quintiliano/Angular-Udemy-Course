import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { unitsOfMeasure } from '../../../shopping-list/models/ingredient.model';
import { NonNullableFormBuilder } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

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
        'name': '',
        'imagePath': '',
        'description': ''
    })

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
        let _name = '';
        let _imagePath = '';
        let _description = '';
        
        if (this.editMode) {
            // The non-null assertion bellow in `this.recipeId!` is because if we're in edit mode
            // it's certain that we have a recipeId set and there is no way it's `undefined`
            // (see the logic present in `ngOnInit` method)
            const recipe = this.recipeService.getRecipe(this.recipeId!);

            _name = recipe.name;
            _imagePath = recipe.imagePath;
            _description = recipe.description;
        }
        
        this.recipeForm.setValue({
            name: _name,
            imagePath: _imagePath,
            description: _description
        })
    }
}
