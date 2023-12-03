import { AccountsService } from '../accounts/accounts.service';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

	// AccountsService is provided in AppComponent
	constructor(private accountsService: AccountsService) {
		accountsService.statusChanged.subscribe(
			(newStatus: string) => { alert(`Status changed to: ${newStatus}`) }
		)
	}

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accountsService.addAccount(accountName, accountStatus);
	}
}
