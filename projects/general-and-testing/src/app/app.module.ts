import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SecondaryComponent } from './secondary/secondary.component';
import { IdShowerComponent } from './id-shower/id-shower.component';
import { WrapperComponent } from './wrapper/wrapper.component';

'always'
'pathParamsOrQueryParamsChange'
'pathParamsChange'

const routes: Routes = [
    { path: 'always', loadChildren: () => import('./modules/always-routing.module').then((x) => x.AlwaysRoutingModule)},
    { path: 'paramsChange', loadChildren: () => import('./modules/params-change-routing.module').then((x) => x.ParamsChangeRoutingModule)},
    { path: 'ParamsOrQueryParamsChange', loadChildren: () => import('./modules/params-or-query-params-change-routing.module').then((x) => x.ParamsOrQueryParamsChangeRoutingModule)},
    { path: 'pathParamsChange', loadChildren: () => import('./modules/path-params-change-routing.module').then((x) => x.PathParamsChangeRoutingModule)},
    { path: 'pathParamsOrQueryParamsChange', loadChildren: () => import('./modules/path-params-or-query-params-change-routing.module').then((x) => x.PathParamsOrQueryParamsChangeRoutingModule)},
    { path: "**", redirectTo: 'paramsChange' }
]

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    SecondaryComponent,
    IdShowerComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
