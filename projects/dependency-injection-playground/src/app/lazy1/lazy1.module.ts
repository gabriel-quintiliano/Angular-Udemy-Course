import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyView1Component } from './lazy-view1/lazy-view1.component';
import { LazyRouting1Module } from './lazy-routing1.module';
import { ServiceModuleModule } from '../service-module/service-module.module';



@NgModule({
	declarations: [
		LazyView1Component
	],
	imports: [
		CommonModule,
		LazyRouting1Module,
		ServiceModuleModule
	],
	exports: [
		LazyView1Component
	]
})
export class Lazy1Module { }
