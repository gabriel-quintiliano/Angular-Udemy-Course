import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerView2Component } from './eager2/eager-view2/eager-view2.component';
import { EagerView1Component } from './eager1/eager-view1/eager-view1.component';

const routes: Routes = [
	{
		path: '',
		component: EagerView1Component
	},
	{
		path: 'eager2',
		component: EagerView2Component
	},
	{
		path: 'lazy1',
		loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module)
	},
	{
		path: 'lazy2',
		loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module)
	},
	{
		path: 'lazy3',
		loadChildren: () => import('./lazy3/lazy3.module').then(m => m.Lazy3Module)
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
