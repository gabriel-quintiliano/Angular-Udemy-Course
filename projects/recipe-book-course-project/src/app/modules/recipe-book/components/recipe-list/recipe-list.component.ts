import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
	recipes!: Recipe[];
    subscription!: Subscription;

	constructor(private recipeService: RecipeService) { }

	ngOnInit() {
		this.recipes = this.recipeService.getRecipes();

        // recipesChanged subject will me sure our recipes array is always up to date
        this.subscription = this.recipeService.recipesChanged.subscribe(updatedRecipes => {
            this.recipes = updatedRecipes;
        })
	}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}
