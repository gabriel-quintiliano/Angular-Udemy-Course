import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

export const canDeactivateServerEditGuard: CanDeactivateFn<EditServerComponent> = (
    component: EditServerComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot) =>
    {
        // if you're not allowed to edit, of course you can leave
        if (!component.allowEdit) {
            return true;
        }
        // if the current serverName or serverStatus is different from the ones provided by the url params (i.e. there was a change)
        // and these changes were not saved, this guard will ask the user if they really want to leave the route without saving the changes
        if ((component.serverName !== component.server.name || component.serverStatus !== component.server.status) && !component.changesSaved) {
            return confirm("Do you want to discard the changes?");
        }

        return true;
};


// Another approach to using this kind of guard is to actually implemente a canDeactivate method (or any other name you'd rather)
// in the component which is loaded by the route and then just call this method here in the guard function, the return value
// from this components canActivate method must be `Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree`
// as these are expected by the CanDeactivateFn which is implemented by this guard, something like:
//
// export const canDeactivateServerEditGuard: CanDeactivateFn<EditServerComponent> = ( component: EditServerComponent, ...) => {
//     return component.canActivate()  
// };