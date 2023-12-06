import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerView1Component } from './eager-view1/eager-view1.component';
import { EagerRouting1Module } from './eager-routing1.module';
import { ServiceModuleModule } from '../service-module/service-module.module';



@NgModule({
	declarations: [
		EagerView1Component
	],
	imports: [
		CommonModule,
		EagerRouting1Module,
		ServiceModuleModule
	],
	exports: [
		EagerView1Component
	]
})
export class Eager1Module { }
