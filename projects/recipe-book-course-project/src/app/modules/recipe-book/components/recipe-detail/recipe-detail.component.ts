import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
	// @Input({ alias: 'recipeDetail', required: true }) recipe!: Recipe;
    recipe!: Recipe;
    recipes!: Recipe[];
    recipeId!: number;

    constructor( private recipeService: RecipeService,
                 private route: ActivatedRoute ) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.route.params.subscribe( (params: Params) => {
            this.recipeId = Number(params['recipe-id']);
            this.recipe = this.recipes[this.recipeId];
        })
    }

    onAddToShoppingList() {
        this.recipeService.addToShoppingList(this.recipe.ingredients)
    }
}
