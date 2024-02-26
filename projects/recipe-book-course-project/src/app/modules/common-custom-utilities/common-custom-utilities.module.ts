import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaceholderComponent } from './placeholder/placeholder.component';

import { ObjectEntriesPipe } from './pipes/object-entries.pipe';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ObjectValuesPipe } from './pipes/object-values.pipe';

import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
	declarations: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe,
		PlaceholderComponent,
		DropdownDirective,
	],
	imports: [
		CommonModule
	],
	exports: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe,
		PlaceholderComponent,
		DropdownDirective,
	]
})
export class CommonCustomUtilitiesModule {
    constructor() {
        console.log("MODULE: CommonCustomUtilitiesModule foi construído: ", Date.now())
    }
}
