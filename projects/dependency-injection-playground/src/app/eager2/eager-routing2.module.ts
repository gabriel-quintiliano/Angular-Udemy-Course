import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EagerView2Component } from "./eager-view2/eager-view2.component";

const routes: Routes = [
	{
		path: "",
		component: EagerView2Component
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EagerRouting2Module { }