import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectValues'
})

export class ObjectValuesPipe implements PipeTransform {

	transform(value: Object): any[] {
		return Object.values(value);
	}

}
