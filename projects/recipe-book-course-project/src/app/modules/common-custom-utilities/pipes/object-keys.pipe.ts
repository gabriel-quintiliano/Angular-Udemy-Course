import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectKeys'
})

export class ObjectKeysPipe implements PipeTransform {

    constructor() {
        console.log("ObjectKeysPipe foi construído: ", Date.now())
    }

	transform(value: Object): string[] {
		return Object.keys(value);
	}

}
