import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaceholderComponent } from "../common-custom-utilities/placeholder/placeholder.component";
import { RecipeEditComponent } from "./components/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { IsValidRecipeIdGuard } from "./guards/isValidRecipeId.guard";
import { loadRecipesResolver } from "./resolvers/load-recipes.resolver";
import { authGuard } from "../../authentication/guards/auth.guard";
import { RecipesComponent } from "./components/recipes/recipes.component";

const routes: Routes = [
  { 
    path: 'recipes',
    canActivate: [ authGuard ],
    component: RecipesComponent,
    resolve: { _loadRecipesOnBoot: loadRecipesResolver },
    children: [
      { 
        path: '', component: PlaceholderComponent, 
        data: { message: "Click on a recipe to have its details displayed here" }
      },
      { path: 'new', component: RecipeEditComponent },
      // static routes must always come before dynamic routes so that only when there
      // is no static route match, Angular will start looking for dynamic route matches,
      // otherwise the static route path will be mistaken as a path param as there will
      // always be a match (in this case, `new` could be taken as the `:recipe-id` param).
      {   
        path: ':recipe-id',
        canActivate: [ IsValidRecipeIdGuard ],
        children: [
          { path: '', component: RecipeDetailComponent },
          { path: 'edit', component: RecipeEditComponent }
        ] 
      },
    ] 
  },
]

@NgModule({
  /* RouterModule.forChild() is identical to RouterModule.forRoot() but it doesn't create a new
   * instance of RouterService, instead it registers the routes from this module in the instance
   * of RouterService which was created as RouterModule.forRoot() was called in AppRoutingModule.
   * RouterModule.forRoot() can be used only once in the entire application so that other routes
   * from other modules can be integrated to this one (via RouterModule.forChild()) and in the
   * end there is only one "route resolving system" (something like that). This way it's like we're
   * declaring the routes above within AppRoutingModule itself (as it's there RouterModule.forRoot()
   * was called within this application.) */
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] // Exporting of RouterModule with the routes configured above
}
)
export class RecipesRoutingModule {}