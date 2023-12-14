import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	server!: { id: number, name: string, status: string };

	constructor(
		private serversService: ServersService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

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

	onEdit() {
		// we're using 'edit' as an relative route bellow, in this case, relatative
		// to the currently loaded route ('/servers/:id'), thus 'edit' will be added
		// to the end of this route ('/servers/:id/edit')
		this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
	}
}
