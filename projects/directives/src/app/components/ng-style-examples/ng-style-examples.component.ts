import { Component } from '@angular/core';

@Component({
	selector: 'app-ng-style-examples',
	templateUrl: './ng-style-examples.component.html',
	styleUrls: ['./ng-style-examples.component.css']
})
export class NgStyleExamplesComponent {
	boolValue = true
	returnTernary() {
		return this.boolValue ? { backgroundColor: 'blue' } : { backgroundColor: 'gray' }
	}
}
