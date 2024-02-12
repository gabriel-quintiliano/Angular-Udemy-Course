import { Pipe, PipeTransform } from '@angular/core';

/* The `pure: false` property of a pipe needs to be handled extremely carefully
 * because it will make the pipe run its `transform` method for each and every
 * change that happens in the component, what can be pretty heavy in some scenarios
 * and waste a bunch of memory creating performance issues.
 * 
 * By default, every pipe implicitly has `pure: true` which means the pipe will
 * only run `transform` when one of its parameters value change. You may think of
 * it as: if a pipe is pure (default), it only cares about changes that can possibly
 * alter the return value of its `transform` method. On the other hand, if a pipe
 * is impure it cares about every change happened in the component in which it was
 * used, even those which won't alter the return value of `transform` 
 * 
 * When to use `{pure: false}`?
 * 
 * It is necessary when the pipe takes an Object (or Array - which is also an Object)
 * as argument, which may have internal values altered in runtime. In this case, as
 * all kinds of Objects are reference types, no matter what happens, the value the
 * pipe has (the address of the Object) won't change, thus, `transform` wouldn't be
 * triggered to run again because of internal changes. */
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

    transform(servers: Server[], filterString: string, filterProp: keyof Server): Server[] {
        console.log('New change detected, FilterPipe (inpure) just ran!')

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