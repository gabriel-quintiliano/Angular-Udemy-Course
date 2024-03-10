import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonCustomUtilitiesModule } from './modules/common-custom-utilities/common-custom-utilities.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentication/components/auth/auth.component';
import { LoadingSpinnerComponent } from './authentication/components/loading-spinner/loading-spinner.component';
import { AuthInterceptor } from './authentication/interceptors/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
	],
	imports: [
		BrowserModule,
    AppRoutingModule,
		RecipesModule,
		ShoppingListModule,
		CommonCustomUtilitiesModule,
    HttpClientModule,
    ReactiveFormsModule
	],
	providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
    ],
	bootstrap: [AppComponent]
})
export class AppModule { }
