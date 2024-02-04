import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonCustomUtilitiesModule } from "../common-custom-utilities/common-custom-utilities.module";

import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./components/shopping-list-edit/shopping-list-edit.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingListEditComponent
	],
	imports: [
		CommonModule,
		CommonCustomUtilitiesModule,
        ReactiveFormsModule
	],
	exports: [
		ShoppingListComponent,
		ShoppingListEditComponent
	]
})

export class ShoppingListModule { }