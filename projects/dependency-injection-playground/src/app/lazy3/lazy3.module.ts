import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyView3Component } from './lazy-view3/lazy-view3.component';
import { LazyRouting3Module } from './lazy-routing3.module';
import { ServiceModuleModule } from '../service-module/service-module.module';



@NgModule({
	declarations: [
		LazyView3Component
	],
	imports: [
		CommonModule,
		LazyRouting3Module,
		ServiceModuleModule
	]
})
export class Lazy3Module { }
