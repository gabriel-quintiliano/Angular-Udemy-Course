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

	// For use inside ngStyle
	spanDisplayType = 'block';


	onDisplayButtonClick() {

		this.clickTimestamps.push((new Date()).toString())

		if (this.showParagraph) {
			this.showParagraph = false;
		} else {
			this.showParagraph = true;
		}
	}
}
