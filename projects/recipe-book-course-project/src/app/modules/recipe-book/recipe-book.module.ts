console.log("FILE: recipe-book.module.ts rodou: ", Date.now())
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonCustomUtilitiesModule } from '../common-custom-utilities/common-custom-utilities.module';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@NgModule({
	declarations: [
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent,
  RecipeEditComponent
	],
	imports: [
		CommonModule,
		CommonCustomUtilitiesModule,
        RouterModule,
        ReactiveFormsModule
	],
	exports: [
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent
	]
})

export class RecipeBookModule { 
    constructor() {
        console.log("MODULE: RecipeBookModule foi construído: ", Date.now())
    }
}
