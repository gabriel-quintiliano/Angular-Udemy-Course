import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './modules/shopping-list/components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './modules/recipe-book/components/recipe-detail/recipe-detail.component';
import { PlaceholderComponent } from './modules/common-custom-utilities/placeholder/placeholder.component';
import { RecipeEditComponent } from './modules/recipe-book/components/recipe-edit/recipe-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: PlaceholderComponent, 
          data: { message: "Click on a recipe to have its details displayed here" },
          pathMatch: 'full'
        },
        { path: 'new', component: RecipeEditComponent },
        // static routes must always come before dynamic routes so that only when there
        // is no static route match, Angular will start looking for dynamic route matches,
        // otherwise the static route path will be mistaken as a path param as there will
        // always be a match (in this case, `new` could be taken as the `:recipe-id` param).
        { path: ':recipe-id', component: RecipeDetailComponent },
        { path: ':recipe-id/edit', component: RecipeEditComponent }
    ] },
    { path: 'shoppingList', component: ShoppingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }