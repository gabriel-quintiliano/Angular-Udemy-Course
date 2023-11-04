import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
	@Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
	@Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

	@ViewChild('contentInput', { static: true }) serverContent!: ElementRef;
	teste = 'apenas um teste'

	ngOnInit() {
		console.log("onInit - serverContent = ", this.serverContent)
	}

	ngAfterViewInit() {
		console.log("afterViewInit - serverContent = ", this.serverContent)
	}
	// newServerName = '';
	// newServerContent = '';

	onAddServer(nameInput: HTMLInputElement) {
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContent.nativeElement.value
		})
	}

	onAddBlueprint(nameInput: HTMLInputElement) {
		this.blueprintCreated.emit({
			serverName: nameInput.value,
			serverContent: this.serverContent.nativeElement.value
		})
	}

}
