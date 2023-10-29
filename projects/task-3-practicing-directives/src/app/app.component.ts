import { Block } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	showParagraph = false;
	clickTimestamps: string[] = [];

	onDisplayButtonClick() {

		this.clickTimestamps.push((new Date()).toString())

		// easiest way to toggle a boolean value - the new value is the opposite of the current value
		this.showParagraph = !this.showParagraph
	}
}
