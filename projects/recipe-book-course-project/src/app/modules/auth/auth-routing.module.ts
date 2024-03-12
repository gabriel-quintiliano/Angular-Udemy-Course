import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";

const routes: Routes = [
  { path: '', component: AuthComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  /* I found out that you actually don't need to exports the RouterModule from here if
   * you don't plain to use it in the module that's importing this one, just having
   * `RouterModule.forChild(routes)` in the imports array will do the job of registering
   * this module's routes in the RouterService created by the `RouterModule.forRoot(routes)`
   * call in AppRoutingModule's imports array. */
  // exports: [RouterModule]
})
export class AuthRoutingModule {}