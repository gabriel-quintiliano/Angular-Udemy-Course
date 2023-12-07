import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	private activeUsers: string[] = []
	private inactiveUsers: string[] = []
	get activeUsersNum() {
		return this.counter.countArrayElements(this.activeUsers);
	}
	get inactiveUsersNum() {
		return this.counter.countArrayElements(this.inactiveUsers);
	}

	constructor(private counter: CounterService) { }

	loadActiveUsers(users: string[]) {
		this.activeUsers = users;
	}

	loadInactiveUsers(users: string[]) {
		this.activeUsers = users;
	}

	setUserToInactive(id: number) {
		this.inactiveUsers.push(this.inactiveUsers[id]);
		this.activeUsers.splice(id, 1);
	}

	setUserToActive(id: number) {
		this.activeUsers.push(this.inactiveUsers[id]);
		this.inactiveUsers.splice(id, 1);
	}
}
