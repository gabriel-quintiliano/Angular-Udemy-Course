import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../../shopping-list/models/ingredient.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
    // Subject that will emit an event each time the recipes array changes
    recipesChanged = new Subject<Recipe[]>()
    get recipesRegistered() {
        return this.recipes.length;
    }

    constructor(private shoppingListService: ShoppingListService) {}

	private recipes: Recipe[] = [
		new Recipe(
			'Batatas Hasselback',
			'Batatas frtas e recheadas deliciosas',
			'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg',
			[
				new Ingredient('batata', 2, 'un'),
				new Ingredient('cheese', 200, 'g'),
			]
		),
		new Recipe(
			'Filé de tilápia com iguarias',
			'Filé de tilápia suculento com temperos diversos',
			'https://restaurantden.wpenginepowered.com/wp-content/uploads/2017/09/free-stock-food-photography-websites.jpg',
			[
				new Ingredient('filé de tilápia', 2, 'un'),
				new Ingredient('açafrão', 100, 'g'),
				new Ingredient('sal', 3, 'tsp'),
				new Ingredient('cheese', 200, 'g'),
			]
		),
		new Recipe(
			'Panquecas com Amora',
			'Panquecas doces deliciosas com amoras frescas',
			'https://restaurantden.wpenginepowered.com/wp-content/uploads/2017/09/pixabay.jpg',
			[
				new Ingredient('farinha de trigo', 200, 'g'),
				new Ingredient('amoras', 100, 'g'),
				new Ingredient('ovos', 2, 'un'),
			]
		)
	];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

	getRecipes() {
		// the slice method will return a shallow copy of the recipes array, therefor it'll be a new array
		// but the elements will be exactly the same as in the recipes array (i.e. the reference to the
		// same objects, so altering these in the copy will reflect on recipes because it's the same object)
		return this.recipes.slice();
	}
    
    getRecipe(id: number): Recipe | undefined {
		return this.recipes[id];
	}

    addToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(recipeId: number) {
        this.recipes.splice(recipeId, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    updateRecipe(recipeId: number, updatedRecipe: Recipe) {
        this.recipes[recipeId] = updatedRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}
