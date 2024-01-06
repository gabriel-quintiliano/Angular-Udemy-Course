import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrapperComponent } from '../wrapper/wrapper.component';
import { rangeResolver } from '../range.resolver';
import { SecondaryComponent } from '../secondary/secondary.component';
import { IdShowerComponent } from '../id-shower/id-shower.component';

const routes: Routes = [
    { path: ":range",
      component: WrapperComponent,
      resolve: {rangeData: rangeResolver},
      runGuardsAndResolvers: 'always',
      children: [
        { path: "sec-one", data: {reference: "sec-one route"}, component: SecondaryComponent, children: [
            { path: ":id", component: IdShowerComponent}
        ]},
        { path: "sec-two", data: {reference: "sec-two route"}, component: SecondaryComponent, children: [
            { path: ":id", component: IdShowerComponent}
        ]}
    ]},
    // redirects to "/0" - I don't know exactly why, but if you write "/0" instead of "0",
    // the router understands 0 as a static path and not as a dynamic param, so "0" is
    // the way to go about that
    { path: "", redirectTo: "0", pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class AlwaysRoutingModule { }
