import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountsService } from '../accounts/accounts.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css'],
})
export class AccountComponent {
	@Input({ required: true }) account!: { name: string, status: string };
	@Input({ required: true }) id!: number;

	// AccountsService is provided in AppModule
	constructor(private accountsService: AccountsService) { }

	onSetTo(status: string) {
		this.accountsService.updateStatus(this.id, status);
		this.accountsService.statusChanged.emit(status);
	}
}
