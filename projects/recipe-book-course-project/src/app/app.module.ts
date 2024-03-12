import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
		// RecipesModule, // this module is now lazy loaded
		ShoppingListModule,
    HttpClientModule, // sets up some global services
    // AuthModule, // this module is now lazy loaded by 'auth' route
    CoreModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
