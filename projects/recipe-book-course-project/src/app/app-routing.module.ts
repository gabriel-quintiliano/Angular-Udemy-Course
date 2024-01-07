import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './modules/shopping-list/components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './modules/recipe-book/components/recipe-detail/recipe-detail.component';
import { PlaceholderComponent } from './modules/common-custom-utilities/placeholder/placeholder.component';

const routes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: PlaceholderComponent, 
          data: { message: "Click on a recipe to have its details displayed here" }
        },
        { path: ':recipe-id', component: RecipeDetailComponent }] },
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
