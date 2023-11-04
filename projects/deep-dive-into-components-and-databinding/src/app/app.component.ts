import { formatCurrency } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test!' }];
	@ViewChild(CockpitComponent) cockpitComp!: Component;
	@ViewChild(CockpitComponent) cockpitElem!: ElementRef;

	ngAfterViewInit() {
		console.log(this.cockpitComp)
		console.log(this.cockpitElem)
	}

	onServerAdded(serverData: { serverName: string, serverContent: string }) {
		this.serverElements.push({
			type: 'server',
			name: serverData.serverName,
			content: serverData.serverContent
		});
	}

	onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
		this.serverElements.push({
			type: 'blueprint',
			name: blueprintData.serverName,
			content: blueprintData.serverContent
		});
	}
}
