import { EventEmitter, Injectable, Output } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	activeUsers: string[] = []
	inactiveUsers: string[] = []
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
		this.inactiveUsers = users;
	}

	setUserToInactive(id: number) {
		this.inactiveUsers.push(this.activeUsers[id]);
		this.activeUsers.splice(id, 1);
	}

	setUserToActive(id: number) {
		this.activeUsers.push(this.inactiveUsers[id]);
		this.inactiveUsers.splice(id, 1);
	}
}
