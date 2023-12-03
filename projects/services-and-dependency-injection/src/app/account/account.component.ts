import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})
export class AccountComponent {
	@Input({ required: true }) account!: { name: string, status: string };
	@Input({ required: true }) id!: number;
	@Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();


	onSetTo(status: string) {
		this.statusChanged.emit({ id: this.id, newStatus: status });
		console.log('A server status changed, new status: ' + status);
	}
}
