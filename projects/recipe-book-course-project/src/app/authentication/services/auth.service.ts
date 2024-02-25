import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { AuthenticationResponseBody } from '../models/authentication-response-body.model';
import { CustomAuthErrorMessage } from '../models/custom-auth-error-message.model';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // BehaviorSubjects always immediatly return the lasted value emitted when subscribed to.
    // in this case, `null` initially and later on the latest authenticated `User` object emitted.
    // user = new BehaviorSubject<User | null>(null);
    user = new BehaviorSubject<User | null>(null);
    private autoLogoutTimeoutId?: ReturnType<typeof setTimeout>;

    constructor(
        private http: HttpClient,
        private router: Router,    
    ) { }

    signup(email: string, password: string) {
        return this.http.post<AuthenticationResponseBody>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmPLklaTyYdUsO2I-NMhDT8f39OW_YbWk',
            { email, password, 'returnSecureToken': true }
        ).pipe(
            tap(this.handleAuthentication),
            catchError(this.handleError)
        );
    }

    login(email: string, password: string) {
        return this.http.post<AuthenticationResponseBody>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmPLklaTyYdUsO2I-NMhDT8f39OW_YbWk',
            { email, password, 'returnSecureToken': true }
        ).pipe(
            tap(this.handleAuthentication),
            catchError(this.handleError)
        );
    }

    autoLogin() {
        const userDataStr = localStorage.getItem("userData");

        if (!userDataStr) return
        // if there is no userDate in local storage, just return

        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string // when saved in local storage via JSON.stringfy(), Date objects
        } = JSON.parse(userDataStr);     // are converted to string via <Date>.toISOString() (always UTC)

        const tokenExpirationDate = new Date(userData._tokenExpirationDate);
        // Gets difference of time in miliseconds between expiration date and current time
        const timeUntilTokenExpiration = tokenExpirationDate.getTime() - Date.now();

        // checks if the token is within its expiration date, if not logs out right after
        if (timeUntilTokenExpiration <= 0) {
            this.logout();
            return
        }

        // As token is still valid creates a user and 'nexts' it using the `user` Subject so component know of it
        const builtUser = new User(userData.email, userData.id, userData._token, tokenExpirationDate);
        this.user.next(builtUser);
        this.autoLogout(timeUntilTokenExpiration);
    }

    logout() {
        localStorage.removeItem("userData");
        this.user.next(null);
        this.router.navigate(['/auth']);

        // clearTimeout function doesn't care if `autoLogoutTimeoutId` is `undefined` or
        // even a from an earlier execution of `setTimeout` that have already been cleared.
        clearTimeout(this.autoLogoutTimeoutId);
    }

    autoLogout(timerInMiliseconds: number) {
        this.autoLogoutTimeoutId = setTimeout(() => {
            this.logout();
        }, timerInMiliseconds);
    }

    /* As this method will be called in a context other than this class's instance (the `tap()`
     * pipeable operator's in case), to make sure it has the correct `this` binded, you have to
     * either bind it manually to this class's `this` context or use an arrow function, which
     * has no `this`, thus binds to the `this` of the outter context where it's created (and
     * use that for every execution, I think it can be considered a closure because of that, maybe...) */
    private handleAuthentication = (resBody: AuthenticationResponseBody) => {
        // Note: res.expiresIn is in seconds
        const userData = new User(resBody.email, resBody.localId, resBody.idToken, Number(resBody.expiresIn));
        this.user.next(userData);
        this.autoLogout(Number(resBody.expiresIn) * 1000);

        try {
            localStorage.setItem("userData", JSON.stringify(userData));
        } catch {
            console.log("An unexprected error has happened when trying to locally store you login token, you'll keep logged in for now, but when this tab is closed you'll need to signin again.\n\nVerify in permission settings of the browser if this website is allowed to use 'local storage'.\nOr maybe, the 'local storage' is full and you must clean it.");
        }
    }

    // The return type annotation is only necessary because the `catchError` operator expects
    // a callback with this signature...
    private handleError(errorRes: HttpErrorResponse): Observable<AuthenticationResponseBody> {
        /* This pipe will run only for errors, and in the end will forward only a custom
         * error message for the subscriber to ocasionally handle */

        // Only Firebase http errors will have an error property and inside that another error
        // property, this, if the captured error doesn't have this properties, a standard message
        // is thrown
        if (!errorRes.error || !errorRes.error.error) {
            console.log(errorRes)
            throw "An unknown error has occurred!";
        }

        const curErrorMessage = errorRes.error.error.message;
        // Checks if the current error status has a custom message set up in CustomAuthErrorMessage
        if (CustomAuthErrorMessage[curErrorMessage as keyof typeof CustomAuthErrorMessage] != undefined) {

            // As the current error message is known by CustomAuthErrorMessage, we can directly
            // access the custom message as the current message is a key in CustomAuthErrorMessage.
            throw CustomAuthErrorMessage[curErrorMessage as keyof typeof CustomAuthErrorMessage];

            // The code above prevents us, for example, from having to write 98 different cases in a
            // switch statement if this application had 98 different errors and also have to remember
            // to return each and every file (where there is similar error handling) to add a new case
            // for any new error implemented in the future;
        } else {
            // For errors that yet not described in CustomAuthErrorMessage object:
            throw `Error: ${errorRes.error.error.message} [status code: ${curErrorMessage}]`;
        }
    }
}
