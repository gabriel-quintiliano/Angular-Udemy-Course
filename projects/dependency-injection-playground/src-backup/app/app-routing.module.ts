import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';

const routes: Routes = [
	{
		path: "def",
		component: DefaultComponent
	},
	{
		path: "teste1",
		loadChildren: () => import('./teste1/teste1.module').then(m => m.Teste1Module)
	},
	{
		path: "teste2",
		loadChildren: () => import('./teste2/teste2.module').then(m => m.Teste2Module)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
