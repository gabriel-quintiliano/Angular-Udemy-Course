import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerView2Component } from './eager-view2/eager-view2.component';
import { EagerRouting2Module } from './eager-routing2.module';
import { ServiceModuleModule } from '../service-module/service-module.module';



@NgModule({
	declarations: [
		EagerView2Component
	],
	imports: [
		CommonModule,
		EagerRouting2Module,
		ServiceModuleModule
	],
	exports: [
		EagerView2Component
	]
})
export class Eager2Module { }
