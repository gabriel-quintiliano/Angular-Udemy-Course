import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompTeste2Component } from './comp-teste2/comp-teste2.component';
import { Default2Component } from './default2/default2.component';


const routes: Routes = [
	{
		path: "teste2",
		component: Default2Component
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Teste2RoutingModule { }
