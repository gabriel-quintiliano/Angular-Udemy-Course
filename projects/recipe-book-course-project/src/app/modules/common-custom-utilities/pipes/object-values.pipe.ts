console.log("FILE: object-values.pipe.ts rodou: ", Date.now())

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectValues'
})

export class ObjectValuesPipe implements PipeTransform {
    constructor() {
        console.log("PIPE: ObjectValuesPipe foi construído: ", Date.now())
    }

	transform(value: Object): any[] {
		return Object.values(value);
	}

}
