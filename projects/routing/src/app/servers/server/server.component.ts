import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	server!: { id: number, name: string, status: string };

	constructor(private serversService: ServersService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		// Be aware: every element we retrieve from the route is a string (as the url path
		// is just text), thus if you need data in a format other than a string, you'll
		// need to parse it, as we're doing bellow for instance.
		this.route.params.subscribe(
			(params: Params) => {
				const id = Number(params['id'])
				this.server = this.serversService.getServer(id);
			}
		)
	}

}
