import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompTeste1Component } from './comp-teste1/comp-teste1.component';
import { Teste1RoutingModule } from './teste1-routing.module';
import { ServiceModuleModule } from '../service-module/service-module.module';
import { Default1Component } from './default1/default1.component';



@NgModule({
	declarations: [
		CompTeste1Component,
		Default1Component
	],
	imports: [
		CommonModule,
		Teste1RoutingModule,
		ServiceModuleModule
	]
})
export class Teste1Module { }
