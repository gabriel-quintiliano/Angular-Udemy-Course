import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { rangeResolver } from './range.resolver';
import { SecondaryComponent } from './secondary/secondary.component';
import { IdShowerComponent } from './id-shower/id-shower.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
    { path: ":range",
      component: WrapperComponent,
      resolve: {rangeData: rangeResolver},
      runGuardsAndResolvers: 'paramsChange',
      children: [
        { path: "sec-one", data: {reference: "sec-one route"}, component: SecondaryComponent, children: [
            { path: ":id", component: IdShowerComponent}
        ]},
        { path: "sec-two", data: {reference: "sec-two route"}, component: SecondaryComponent, children: [
            { path: ":id", component: IdShowerComponent}
        ]}
    ]}
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
