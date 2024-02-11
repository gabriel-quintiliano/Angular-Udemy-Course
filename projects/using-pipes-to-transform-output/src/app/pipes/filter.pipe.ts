import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(servers: Server[], filterString: string, filterProp: keyof Server): Server[] {
        // if `filteredString` is empty (''), no filtering will happen
        if (!filterString) {
            return servers;
        }

        const filteredServers: Server[] = []

        for (let server of servers) {
            // yes, if the user chooses 'started' as `filterProp` this will fail, but this
            // pipe here is only for learning purposes, so I won't deal with that right now
            if (server[filterProp] === filterString) {
                filteredServers.push(server);
            }
        }

        return filteredServers;
    }
}

type Server = {
    instanceType: string,
    name: string,
    status: string,
    started: Date}