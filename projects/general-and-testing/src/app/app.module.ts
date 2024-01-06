import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { rangeResolver } from './range.resolver';
import { SecondaryOneComponent } from './secondary-one/secondary-one.component';
import { SecondaryTwoComponent } from './secondary-two/secondary-two.component';
import { IdShowerComponent } from './id-shower/id-shower.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
    { path: ":range",
      component: WrapperComponent,
      resolve: {rangeData: rangeResolver},
      children: [
        { path: "sec-one", component: SecondaryOneComponent, children: [
            { path: ":id", component: IdShowerComponent}
        ]},
        { path: "sec-two", component: SecondaryTwoComponent, children: [
            { path: ":id", component: IdShowerComponent}
        ]}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    SecondaryOneComponent,
    SecondaryTwoComponent,
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
