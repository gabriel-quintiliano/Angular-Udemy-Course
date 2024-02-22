import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { CustomErrorMessage } from '../../models/custom-error-message.model';
import { FirebaseHttpErrorResponse } from '../../models/firebase-http-error-response.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    loginMode = true;
    isLoading = false;
    error: null | string = null;
    userDataForm = this.nnfb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    })

    constructor(private nnfb: NonNullableFormBuilder,
                private authService: AuthService) { }

    onSwitchMode() {
        // reverses the previously stored boolean value;
        this.loginMode = !this.loginMode;
    }

    onSubmit() {
        if (!this.userDataForm.valid) return

        const email = this.userDataForm.get('email')!.value;
        const password = this.userDataForm.get('password')!.value;
        
        this.isLoading = true;

        if (this.loginMode) {
            // A sign in method will be implemented later on
        } else {
            // If the user is not in login mode, then they're signing up
            this.authService.signup(email, password)
            .subscribe({
                next: res => {
                    console.log("response from signup: ", res);
                    this.error = null;
                    this.isLoading = false;
                },
                error: (errorRes: FirebaseHttpErrorResponse) => {
                    const curErrorMessage = errorRes.error.error.message;

                    // Checks if the current error status has a custom message set up in CustomErrorMessage
                    if (CustomErrorMessage[curErrorMessage as keyof typeof CustomErrorMessage] != undefined) {

                        // As the current error message is known by CustomErrorMessage, we can directly
                        // access the custom message as the current message is a key in CustomErrorMessage.
                        this.error = CustomErrorMessage[curErrorMessage as keyof typeof CustomErrorMessage];

                        // The code above prevents us, for example, from having to write 98 different cases in a
                        // switch statement if this application had 98 different errors and also have to remember
                        // to return each and every file (where there is similar error handling) to add a new case
                        // for any new error implemented in the future;

                    } else {
                        // For errors that yet not described in CustomErrorMessage object:
                        this.error = `Error: ${errorRes.error.error.message} [status code: ${curErrorMessage}]`;
                    }

                    this.isLoading = false;
                }
            });
        }

        this.userDataForm.reset();
    }
}
