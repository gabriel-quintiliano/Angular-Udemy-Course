import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RecipeService } from '../modules/recipe-book/services/recipe.service';
import { DataStorageService } from '../shared/services/data-storage.service';

/* I don't if this is a good use of a resolver as the data it resolves isn't
 * used anywhere and it mainly needs to run because of side efects, in case
 * each time the './recipes' route is activated it checks if there are any
 * recipes registered within RecipeService (i.e. it recipes were already
 * fetched earlier), if not it fetches recipes right before route activation.
 * 
 * Maybe the same thing could be done wihtin the `onInit` hook of wrapper 
 * RecipesComponent... */

export const loadRecipesResolver: ResolveFn<boolean> = (route, state) => {
    const recipeService = inject(RecipeService);
    const dataStorageService = inject(DataStorageService);
    
    if (!recipeService.recipesRegistered) {
        dataStorageService.fetchRecipes();
        return true;
    }

    return false;
};