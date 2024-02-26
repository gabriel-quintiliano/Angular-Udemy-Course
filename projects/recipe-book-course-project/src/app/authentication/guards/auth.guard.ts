import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    console.log("authGuard foi rodada: ", Date.now())
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.user.pipe(
        take(1),
        map(user => {
            if (user) {
                // As our application implements a `autoLogout` function to make sure
                // no non-authenticated user keeps login in after its token expiration
                // we can be sure that if the is a truthy value for user, they are
                // properly authenticated.
                return true;
            }

            // if there is no authenticated user, they'll be redirect to '/auth' route.
            return router.createUrlTree(['/auth']);
        })
    )

    /* NOTE: The `take(1)` operator is specially important in this case because it will
     * automatically unsub from the this Subject after 1 value emitted, otherwise pretty
     * unpleasant UX could happen in specific cases where this guard would keep receiving
     * new values emitted every once in a while. */
};
