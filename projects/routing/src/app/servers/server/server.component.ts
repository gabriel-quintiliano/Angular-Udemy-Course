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
		// private serversService: ServersService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit() {
        // before defining a resolver to path `/servers/:id` we had to access the ServersService
        // directly as bellow
		// this.route.params.subscribe(
		// 	(params: Params) => {
		// 		const id = Number(params['id'])
		// 		this.server = this.serversService.getServer(id);
		// 	}
		// )

        // now, after seting up the resolver, the server data is fetched before the component is
        // loaded and thus we get this server data from the route itself (without reaching to the
        // ServersService directly)
        this.route.data.subscribe(
            (data) => {
                this.server = data['server'];
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
