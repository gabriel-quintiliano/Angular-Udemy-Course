import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, createUrlTreeFromSnapshot } from "@angular/router";
import { RecipeService } from "../modules/recipe-book/services/recipe.service";
import { inject } from "@angular/core";

export const IsValidRecipeIdGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const recipeService = inject(RecipeService);
    const recipeId = Number(route.params['recipe-id'])
    
    if (Number.isNaN(recipeId)) {
        // if the user types letters intead of a number for the recipe-id route param
        // the user will be redirected to '/recipes'
        console.log('is nan')
        return createUrlTreeFromSnapshot(route.root, ['recipes']);
    }

    if (recipeId > recipeService.recipesRegistered - 1) {
        // if the user tries to access a recipe-id beyond the number of registered recipes
        // they will be redirected to the details of the last registerde recipe
        return createUrlTreeFromSnapshot(route.root, ['recipes', recipeService.recipesRegistered - 1]);
    }

    // if its a valid recipe-id the route will just be loaded
    return true;
}