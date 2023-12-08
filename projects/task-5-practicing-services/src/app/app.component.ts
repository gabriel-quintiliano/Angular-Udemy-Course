import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private users: UsersService) { }

	ngOnInit() {
		this.users.loadActiveUsers(['Max', 'Anna'])
		this.users.loadInactiveUsers(['Chris', 'Manu'])
	}
}
