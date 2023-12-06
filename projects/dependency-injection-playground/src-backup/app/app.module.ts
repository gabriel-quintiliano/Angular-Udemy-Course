import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementInjectorComponent } from './components/element-injector/element-injector.component';
import { ServiceModuleModule } from './service-module/service-module.module';
// import { Teste1Module } from './teste1/teste1.module';
// import { Teste2Module } from './teste2/teste2.module';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
	declarations: [
		AppComponent,
		ElementInjectorComponent,
		DefaultComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceModuleModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
