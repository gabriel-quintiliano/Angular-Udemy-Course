import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LazyView1Component } from "./lazy-view1/lazy-view1.component";

const routes: Routes = [
	{
		path: "",
		component: LazyView1Component
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LazyRouting1Module { }