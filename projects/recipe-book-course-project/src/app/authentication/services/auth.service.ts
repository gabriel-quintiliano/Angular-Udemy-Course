import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { CustomAuthErrorMessage } from '../models/custom-auth-error-message.model';
import { SignUpResponseBody } from '../models/sign-up-response-body.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<SignUpResponseBody>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmPLklaTyYdUsO2I-NMhDT8f39OW_YbWk',
            {email: email, password: password, 'returnSecureToken': true}
        ).pipe(catchError((errorRes: HttpErrorResponse) => {
            /* This pipe will run only for errors, and in the end will forward only a custom
             * error message for the subscriber to ocasionally handle */

            // Only Firebase http errors will have an error property and inside that another error
            // property, this, if the captured error doesn't have this properties, a standard message
            // is thrown
            if (!errorRes.error || !errorRes.error.error) {
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
        }));
    }
}
