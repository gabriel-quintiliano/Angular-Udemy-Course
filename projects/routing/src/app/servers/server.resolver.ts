import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ServersService } from './servers.service';

type Server = { id: number, name: string, status: string };

// each time the route which this resolver it set up ('/servers/:id') is reached, this resolver
// will run again, thus we will always have the most up to date server info, thus,
// the ActivatedRouteSnapshot is all we need, in this case the Observables provided by
// ActivatedRoute are not necessary

export const serverResolver: ResolveFn<Server> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const serversService = inject(ServersService);
    const id = Number(route.params['id']);

    return serversService.getServer(id);
};
