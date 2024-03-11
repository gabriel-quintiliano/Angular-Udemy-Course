import { NgModule } from '@angular/core';
import { CommonCustomUtilitiesModule } from '../common-custom-utilities/common-custom-utilities.module';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent,
    RecipeEditComponent,
    RecipesComponent
	],
	imports: [
		CommonCustomUtilitiesModule,
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
	],
})

export class RecipesModule { }
