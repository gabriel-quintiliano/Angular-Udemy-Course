import { LoggingService } from '../logging/logging.service';
import { Component, EventEmitter, Output, inject } from '@angular/core';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css'],
	// this below tells Angular to handle the instanciation of service LoggingService, and in
	// this case provide a new instance of the service for every new NewAccountComponent	
	providers: [LoggingService],
})
export class NewAccountComponent {
	@Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

	// this tells Angular to inject the instance from LoggingService in this
	// `loggingService` property of NewAccountComponent
	private loggingService: LoggingService = inject(LoggingService)

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accountAdded.emit({
			name: accountName,
			status: accountStatus
		});

		this.loggingService.logStatusChange(accountStatus);
	}
}
