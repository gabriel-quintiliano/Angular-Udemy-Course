import { AccountsService } from './accounts/accounts.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	accounts: { name: string, status: string }[] = [];

	// service provided in AppModule so its available application wide
	constructor(private accountsService: AccountsService) { }

	ngOnInit() {
		this.accounts = this.accountsService.accounts;
	}
}
