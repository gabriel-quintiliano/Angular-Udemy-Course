import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleExamplesComponent } from './components/ng-style-examples/ng-style-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleExamplesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
