import { NgModule } from "@angular/core";
import { CommonCustomUtilitiesModule } from "../common-custom-utilities/common-custom-utilities.module";

import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./components/shopping-list-edit/shopping-list-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingListEditComponent
	],
	imports: [
		CommonCustomUtilitiesModule,
    ReactiveFormsModule,
    SharedModule,
    // As this is a pretty small module, you might as well register its routes as follows:
    RouterModule.forChild([
      { path: 'shoppingList', component: ShoppingListComponent }
    ])
	]
})

export class ShoppingListModule { }