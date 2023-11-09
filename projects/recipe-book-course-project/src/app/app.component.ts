import { Component } from '@angular/core';
import { ContentAvailableToBeShownType, contentAvailableToBeShown } from './models/content.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	loadedFeature!: ContentAvailableToBeShownType;
	contentAvailableToBeShown = contentAvailableToBeShown; // necessary as I want to use this enum like object in template


	onUpdateContentRequest(contentName: ContentAvailableToBeShownType) {
		this.loadedFeature = contentName;
	}
}
