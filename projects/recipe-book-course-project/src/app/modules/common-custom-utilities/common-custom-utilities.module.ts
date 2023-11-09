import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectEntriesPipe } from './pipes/object-entries.pipe';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ObjectValuesPipe } from './pipes/object-values.pipe';
import { PlaceholderComponent } from './placeholder/placeholder.component'


@NgModule({
	declarations: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe,
		PlaceholderComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe,
		PlaceholderComponent,
	]
})
export class CommonCustomUtilitiesModule { }
