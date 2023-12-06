import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LazyView2Component } from "./lazy-view2/lazy-view2.component";

const routes: Routes = [
	{
		path: "",
		component: LazyView2Component
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LazyRouting2Module { }