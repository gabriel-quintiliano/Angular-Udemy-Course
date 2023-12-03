import { AccountsService } from '../accounts/accounts.service';
import { LoggingService } from '../logging/logging.service';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css'],
	// this below tells Angular to handle the instanciation of service LoggingService, and in
	// this case provide a new instance of the service for every new NewAccountComponent	
	providers: [LoggingService],
})
export class NewAccountComponent {

	constructor(
		// this tells Angular to inject the instance from LoggingService in this
		// `loggingService` property of NewAccountComponent
		private loggingService: LoggingService,
		// AccountsService is provided in AppComponent
		private accounstService: AccountsService) { }

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accounstService.addAccount(accountName, accountStatus)
		this.loggingService.logStatusChange(accountStatus);
	}
}
