import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonCustomUtilitiesModule } from "../common-custom-utilities/common-custom-utilities.module";

import { ReactiveFormsModule } from "@angular/forms";
import { ShoppingListEditComponent } from "./components/shopping-list-edit/shopping-list-edit.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

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

export class ShoppingListModule {
    constructor() {
        console.log("MODULE: ShoppingListModule foi construído: ", Date.now())
    }
 }