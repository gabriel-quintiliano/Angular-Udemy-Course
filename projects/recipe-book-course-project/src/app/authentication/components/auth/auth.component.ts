import { Component, OnDestroy, ViewContainerRef } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { AuthenticationResponseBody } from '../../models/authentication-response-body.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
    loginMode = true;
    isLoading = false;
    error: null | string = null;
    userDataForm = this.nnfb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    })
    alertModalSub: Subscription | null = null;

    constructor(
        private nnfb: NonNullableFormBuilder,
        private authService: AuthService,
        private router: Router,
        private vcRef: ViewContainerRef,
    ) { }

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
                this.error = errorMessage;
                this.showErrorAlert(errorMessage);
                this.isLoading = false;
            }
        })

        this.userDataForm.reset();
    }

    onHandleError() {
        this.error = null;
    }

    private showErrorAlert(message: string) {
        this.vcRef.clear(); // clear all views previously attatched to the view container.
        // Creates and attaches to vc a AlertComponent, this method returns a ComponentRef
        // of the component created
        const alertCompRef = this.vcRef.createComponent(AlertComponent);
        // From the ComponentRef returned above, gets the actual component instance created
        // this is the one whose view will appear in the screen of the user.
        const alertComp = alertCompRef.instance;

        // Sets the message prop. of the AlertComponent create
        alertComp.message = message;
        // Sets the message prop. of the AlertComponent create
        this.alertModalSub = alertComp.close.subscribe(() => {
            // As soon as a value is emitted by the close EventEmitter, unsubs this observer
            // and clear the view container (i.e. destroys the modal AlertComponent)
            this.alertModalSub?.unsubscribe();
            this.vcRef.clear();
        })
    }

    ngOnDestroy() {
        this.alertModalSub?.unsubscribe();
    }
}
