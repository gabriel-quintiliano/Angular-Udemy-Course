import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	user!: { id: number, name: string };

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		// this .snapshot.params method lets you retrieve the dynamic segments
		// setup for the route this component sits in, just specify which the
		// name of the param you want to retrieve (same name defined in the route setup)
		this.user = {
			id: this.route.snapshot.params['id'],
			name: this.route.snapshot.params['name']
		}
	}

}
