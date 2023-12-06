import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Eager1Module } from './eager1/eager1.module';
import { Eager2Module } from './eager2/eager2.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		Eager1Module,
		Eager2Module
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
