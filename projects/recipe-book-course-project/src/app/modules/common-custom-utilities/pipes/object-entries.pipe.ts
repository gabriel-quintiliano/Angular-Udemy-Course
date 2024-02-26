import { OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'objectEntries'
})
export class ObjectEntriesPipe implements PipeTransform, OnInit {
    constructor() {
        console.log("ObjectEntriesPipe foi construído: ", Date.now())
    }
    
    ngOnInit(): void {
        console.log("ObjectEntriesPipe RODOU NGONINIT()!!!: ", Date.now())
    }

	transform(value: Object): [string, any][] {
		return Object.entries(value);
	}

}
