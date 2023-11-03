import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectEntriesPipe } from './pipes/object-entries.pipe';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ObjectValuesPipe } from './pipes/object-values.pipe';


@NgModule({
	declarations: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		ObjectEntriesPipe,
		ObjectKeysPipe,
		ObjectValuesPipe
	]
})
export class CommonCustomUtilitiesModule { }
