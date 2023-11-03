import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookModule } from './modules/recipe-book/recipe-book.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { CommonCustomUtilitiesModule } from './modules/common-custom-utilities/common-custom-utilities.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RecipesComponent,
	],
	imports: [
		BrowserModule,
		RecipeBookModule,
		ShoppingListModule,
		CommonCustomUtilitiesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
