import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
	@Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
	@Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

	// newServerName = '';
	newServerContent = '';

	onAddServer(nameInput: HTMLInputElement) {
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: this.newServerContent
		})
	}

	onAddBlueprint(nameInput: HTMLInputElement) {
		this.blueprintCreated.emit({
			serverName: nameInput.value,
			serverContent: this.newServerContent
		})
	}

}
