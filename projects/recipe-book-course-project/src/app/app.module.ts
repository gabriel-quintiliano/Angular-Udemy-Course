import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonCustomUtilitiesModule } from './modules/common-custom-utilities/common-custom-utilities.module';
import { RecipeBookModule } from './modules/recipe-book/recipe-book.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentication/components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LoadingSpinnerComponent } from './authentication/components/loading-spinner/loading-spinner.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RecipesComponent,
  AuthComponent,
  LoadingSpinnerComponent,
	],
	imports: [
		BrowserModule,
        AppRoutingModule,
		RecipeBookModule,
		ShoppingListModule,
		CommonCustomUtilitiesModule,
        HttpClientModule,
        ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
