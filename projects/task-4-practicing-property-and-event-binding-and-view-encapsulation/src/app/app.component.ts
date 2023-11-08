import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	evenNumbers: number[] = [];
	oddNumbers: number[] = [];
	callID = 0;

	constructor(public cd: ChangeDetectorRef) { }

	onRandomNumberGenerated(num: number) {
		if (num % 2) this.oddNumbers.push(num)
		else this.evenNumbers.push(num)
	}

	onClearNumbersRequest() {
		this.evenNumbers = [];
		this.oddNumbers = [];
	}

	pickColorStyle(): string {
		let red = this.pickRandomNumberBetween(0, 255);
		let green = this.pickRandomNumberBetween(0, 255);
		let blue = this.pickRandomNumberBetween(0, 255);
		console.log(`Random color requested #${this.callID}`)
		this.callID++;

		// this.cd.detectChanges()

		return `rgb(${red},${green},${blue})`

	}
	// 	async pickColorStyle(): Promise<string> {
	// 		return new Promise((resolve, reject) => {
	// 			let red = this.pickRandomNumberBetween(0, 255);
	// 			let green = this.pickRandomNumberBetween(0, 255);
	// 			let blue = this.pickRandomNumberBetween(0, 255);
	// 			console.log(`Random color requested #${this.callID}`)
	// 			this.callID++;
	// 
	// 			resolve(`rgb(${red},${green},${blue})`)
	// 		})
	// 	}

	pickRandomNumberBetween(min: number, max: number): number {
		const rand = Math.floor(Math.random() * (max + 1 - min) + min)
		return rand
	}
}
