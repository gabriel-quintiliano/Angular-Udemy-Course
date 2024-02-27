console.log("FILE: object-keys.pipe.ts rodou: ", Date.now())

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectKeys'
})

export class ObjectKeysPipe implements PipeTransform {

    constructor() {
        console.log("PIPE: ObjectKeysPipe foi construído: ", Date.now())
    }

	transform(value: Object): string[] {
		return Object.keys(value);
	}

}
