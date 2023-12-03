import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountsService } from '../accounts/accounts.service';

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

	constructor(
		// this tells Angular to inject the instance from LoggingService in this
		// `loggingService` property of AccountComponent
		private loggingService: LoggingService,
		// AccountsService is provided in AppComponent
		private accountsService: AccountsService) { }

	onSetTo(status: string) {
		this.accountsService.updateStatus(this.id, status);
		this.loggingService.logStatusChange(status);
	}
}
