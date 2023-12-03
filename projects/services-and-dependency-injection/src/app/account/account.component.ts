import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging/logging.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css'],
	// this below tells Angular to handle the instanciation of service LoggingService, and in
	// this case provide a new instance of the service for every new AccountComponent	
	providers: [LoggingService],
})
export class AccountComponent {
	@Input({ required: true }) account!: { name: string, status: string };
	@Input({ required: true }) id!: number;
	@Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

	// this tell Angular to inject the instance from LoggingService in this
	// `loggingService` property of AccountComponent
	constructor(private loggingService: LoggingService) { }

	onSetTo(status: string) {
		this.statusChanged.emit({ id: this.id, newStatus: status });
		this.loggingService.logStatusChange(status)
	}
}
