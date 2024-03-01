import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationResponseBody } from '../../models/authentication-response-body.model';
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
                private authService: AuthService,
                private router: Router) { }

    onSwitchMode() {
        // reverses the previously stored boolean value;
        this.loginMode = !this.loginMode;
    }

    onSubmit() {
        if (!this.userDataForm.valid) return

        const email = this.userDataForm.get('email')!.value;
        const password = this.userDataForm.get('password')!.value;
        
        this.isLoading = true;

        let authObservable: Observable<AuthenticationResponseBody>;

        if (this.loginMode) {
            authObservable = this.authService.login(email, password)
        } else {
            // If the user is not in login mode, then they're signing up
            authObservable = this.authService.signup(email, password)
        }

        authObservable.subscribe({
            next: res => {
                this.error = null;
                this.isLoading = false;
                // Redirects the authenticated user to './recipes' route
                this.router.navigate(['/recipes']);
            },
            error: (errorMessage: string) => {
                this.error = errorMessage
                this.isLoading = false;
            }
        })

        this.userDataForm.reset();
    }

    onHandleError() {
        this.error = null;
    }
}
