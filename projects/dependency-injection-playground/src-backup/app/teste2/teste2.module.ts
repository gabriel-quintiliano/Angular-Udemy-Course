import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompTeste2Component } from './comp-teste2/comp-teste2.component';
import { Teste2RoutingModule } from './teste2-routing.module';
import { ServiceModuleModule } from '../service-module/service-module.module';
import { Default2Component } from './default2/default2.component';



@NgModule({
	declarations: [
		CompTeste2Component,
		Default2Component
	],
	imports: [
		CommonModule,
		Teste2RoutingModule,
		ServiceModuleModule
	],
	exports: [
		CompTeste2Component
	]
})
export class Teste2Module { }
