import { AccountsService } from '../accounts/accounts.service';
import { LoggingService } from '../logging/logging.service';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

	// AccountsService is provided in AppComponent
	constructor(private accounstService: AccountsService) { }

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accounstService.addAccount(accountName, accountStatus)
	}
}
