import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
	selector: 'app-inactive-users',
	templateUrl: './inactive-users.component.html',
	styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
	users: string[] = [];

	constructor(protected usersService: UsersService) { }

	ngOnInit() {
		this.users = this.usersService.inactiveUsers;
	}
}
