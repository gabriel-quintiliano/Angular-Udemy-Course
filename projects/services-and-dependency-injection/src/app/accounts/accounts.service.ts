import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from '../logging/logging.service';

// This decorator is important to mark that this class can be injected into other classes
// and also receive injections (without it, the injection of LoggingService wouldn't work)
// and informing property `providedIn: 'root'` is the same as importing this service in AppModule (aka 'root')
// and declaring it in the providers array, but with this services can be lazy loaded and redundant code cut off
@Injectable({
	providedIn: "root"
})
export class AccountsService {
	statusChanged = new EventEmitter<string>();

	accounts = [
		{
			name: 'Master Account',
			status: 'active'
		},
		{
			name: 'Testaccount',
			status: 'inactive'
		},
		{
			name: 'Hidden Account',
			status: 'unknown'
		}
	];

	constructor(private loggingService: LoggingService) { }

	addAccount(name: string, status: string) {
		this.accounts.push({ name, status });
		this.loggingService.logStatusChange(status);
	}

	updateStatus(id: number, status: string) {
		this.accounts[id].status = status;
		this.loggingService.logStatusChange(status);
	}
}
