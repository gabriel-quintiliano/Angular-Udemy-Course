import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectValues'
})

export class ObjectValuesPipe implements PipeTransform {
    constructor() {
        console.log("ObjectValuesPipe foi construído: ", Date.now())
    }

	transform(value: Object): any[] {
		return Object.values(value);
	}

}
