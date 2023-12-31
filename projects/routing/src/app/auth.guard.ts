import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	const authService = inject(AuthService);
	const router = inject(Router);
	
    const res = authService.isAuthenticated()
    .then((authenticated: boolean) => {
        if (authenticated) {
            return true
        }

        router.navigate(['/'])
        return false
    });

    return res;
}

export const AuthGuardForChild: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return AuthGuard(childRoute, state);
}