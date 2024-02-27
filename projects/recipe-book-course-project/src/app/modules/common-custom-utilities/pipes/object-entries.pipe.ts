console.log("FILE: object-entries.pipe.ts rodou: ", Date.now())
import { OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectEntries'
})
export class ObjectEntriesPipe implements PipeTransform, OnInit {
    constructor() {
        console.log("PIPE: ObjectEntriesPipe foi construído: ", Date.now())
    }
    
    ngOnInit(): void {
        console.log("PIPE: ObjectEntriesPipe RODOU NGONINIT()!!!: ", Date.now())
    }

	transform(value: Object): [string, any][] {
		return Object.entries(value);
	}

}
