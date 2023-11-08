import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	evenNumbers: number[] = [];
	oddNumbers: number[] = [];

	onRandomNumberGenerated(num: number) {
		if (num % 2) this.oddNumbers.push(num)
		else this.evenNumbers.push(num)
	}

	onClearNumbersRequest() {
		this.evenNumbers = [];
		this.oddNumbers = [];
	}
}
