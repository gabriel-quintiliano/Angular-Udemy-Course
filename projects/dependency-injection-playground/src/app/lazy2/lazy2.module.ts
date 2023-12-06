import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyView2Component } from './lazy-view2/lazy-view2.component';
import { LazyRouting2Module } from './lazy-routing2.module';
import { ServiceModuleModule } from '../service-module/service-module.module';



@NgModule({
	declarations: [
		LazyView2Component
	],
	imports: [
		CommonModule,
		LazyRouting2Module,
		ServiceModuleModule
	]
})
export class Lazy2Module { }
