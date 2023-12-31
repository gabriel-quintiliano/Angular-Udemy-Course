import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCustomUtilitiesModule } from '../common-custom-utilities/common-custom-utilities.module';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

@NgModule({
	declarations: [
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent
	],
	imports: [
		CommonModule,
		CommonCustomUtilitiesModule,
	],
	exports: [
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent
	]
})

export class RecipeBookModule { }
