import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LazyView3Component } from "./lazy-view3/lazy-view3.component";

const routes: Routes = [
	{
		path: "",
		component: LazyView3Component
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LazyRouting3Module { }