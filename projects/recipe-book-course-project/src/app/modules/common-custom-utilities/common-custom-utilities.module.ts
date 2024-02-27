console.log("FILE: common-custom-utilities.module.ts rodou: ", Date.now())
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaceholderComponent } from './placeholder/placeholder.component';

import { ObjectEntriesPipe } from './pipes/object-entries.pipe';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ObjectValuesPipe } from './pipes/object-values.pipe';

import { UnusedModule } from '../unused/unused.module';
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
		CommonModule,
        UnusedModule
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
