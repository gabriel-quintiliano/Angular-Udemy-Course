import { Component, EventEmitter, Output } from '@angular/core';
import { ContentAvailableToBeShownType, contentAvailableToBeShown } from '../../models/content.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@Output() updateContentRequest = new EventEmitter<ContentAvailableToBeShownType>();
	contentAvailableToBeShown = contentAvailableToBeShown; // necessary as I want to use this enum like object in template

	onContentAnchorClick(contentName: ContentAvailableToBeShownType) {
		this.updateContentRequest.emit(contentName);
	}
}
