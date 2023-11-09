import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectEntries'
})
export class ObjectEntriesPipe implements PipeTransform {

	transform(value: Object): [string, any][] {
		return Object.entries(value);
	}

}
