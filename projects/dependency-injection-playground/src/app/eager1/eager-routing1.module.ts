import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EagerView1Component } from "./eager-view1/eager-view1.component";

const routes: Routes = [
	{
		path: "",
		component: EagerView1Component
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EagerRouting1Module { }