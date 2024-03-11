import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonCustomUtilitiesModule } from './modules/common-custom-utilities/common-custom-utilities.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
    AppRoutingModule,
		RecipesModule,
		ShoppingListModule,
		CommonCustomUtilitiesModule,
    ReactiveFormsModule,
    HttpClientModule, // sets up some global services
    AuthModule,
    CoreModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
