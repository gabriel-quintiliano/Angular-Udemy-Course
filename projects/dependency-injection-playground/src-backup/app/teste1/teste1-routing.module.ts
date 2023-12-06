import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompTeste1Component } from './comp-teste1/comp-teste1.component';
import { Default1Component } from './default1/default1.component';


const routes: Routes = [
	{
		path: "teste1",
		component: Default1Component
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Teste1RoutingModule { }
