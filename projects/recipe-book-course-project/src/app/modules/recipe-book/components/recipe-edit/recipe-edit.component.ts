import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { unitsOfMeasure } from '../../../shopping-list/models/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    protected unitsOfMeasure = unitsOfMeasure // add it here just so that we can access it in the template
    recipeId?: number;
    editMode = false;

    constructor(private route: ActivatedRoute) {}

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
        })
    }


}
