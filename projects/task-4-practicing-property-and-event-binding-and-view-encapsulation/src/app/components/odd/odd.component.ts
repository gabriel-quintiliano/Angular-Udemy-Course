import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-odd',
	templateUrl: './odd.component.html',
	styleUrls: ['./odd.component.css']
})
export class OddComponent {
	@Input({ alias: 'displayNumber', required: true }) num!: number;
	rgbColor: string;

	constructor() {
		this.rgbColor = this.pickRandomRgbColor();
	}

	pickRandomRgbColor(): string {
		let red = this.pickRandomNumberBetween(0, 255);
		let green = this.pickRandomNumberBetween(0, 255);
		let blue = this.pickRandomNumberBetween(0, 255);

		return `rgb(${red},${blue},${green})`;

	}

	pickRandomNumberBetween(min: number, max: number): number {
		const rand = Math.floor(Math.random() * (max + 1 - min) + min)
		return rand;
	}
}
