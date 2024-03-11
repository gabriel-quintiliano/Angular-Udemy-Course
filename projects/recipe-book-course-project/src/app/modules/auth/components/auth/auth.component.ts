import { Component, ComponentRef, OnDestroy, OnInit, ViewContainerRef, ViewRef } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationResponseBody } from '../../models/authentication-response-body.model';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from 'projects/recipe-book-course-project/src/app/shared/components/alert/alert.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
    loginMode = true;
    isLoading = false;
    error: null | string = null;
    userDataForm = this.nnfb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    })
    alertModalCompRef!: ComponentRef<AlertComponent>;
    alertModalViewRef!: ViewRef;
    alertModalSub: Subscription | null = null;

    constructor(
        private nnfb: NonNullableFormBuilder,
        private authService: AuthService,
        private router: Router,
        private vcRef: ViewContainerRef,
    ) { }

    ngOnInit() {
        // Create an instance of AlertComponent and automatically attaches it to the vcr.
        this.alertModalCompRef = this.vcRef.createComponent(AlertComponent);
        // As initially we don't want to show the alert modal for errors, we properly
        // detach it from the vcr (but still keep this view's reference to reuse later on).
        this.alertModalViewRef = this.vcRef.detach()!;
    }

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
        // The alert modal view for error is already created, then we just need to attach
        // it to vcr right now.
        this.vcRef.insert(this.alertModalViewRef);

        const alertComp = this.alertModalCompRef.instance;
        // Set a error message to be displayed to the user.
        alertComp.message = message;
        // Subscribe to the component's `close` EventEmitter
        this.alertModalSub = alertComp.close.subscribe(() => {
            // As soon as a value is emitted by the close EventEmitter, unsubs this observer
            // and detaches AlertComponent's view from this view container (i.e. destroys the modal AlertComponent)
            this.alertModalSub?.unsubscribe();
            // As there might happen new errors later on, don't destroy the component, just
            // detach its view from the vcr once again.
            this.vcRef.detach();
        })
        
    }

    ngOnDestroy() {
        // Even though the AlertComponent will shortly be destroy by now and to whose EventEmitter
        // we may still be subscribed if the user haven't close the modal at this point, it doesn't
        // hurt to just make sure we unsubscribe and prevent any chance of memory leaks.
        this.alertModalSub?.unsubscribe();

        // Again, as this whole AuthComponent will be destroyed and thus everything comprised in it
        // also will already be destroyed, buuut, there is just a catchy thing the lifecycle hooks of
        // a component, if their view is detached from the ViewContainerRef, their `ngOnDestroy`
        // lifecycle hook just won't run, so if the component had crucial code to be run on the
        // destruction of the component, this just won't be executed by Angular. Therefore, because
        // of that, it doesn't hurt (and I think is even recommended) to manually destroy dynamically
        // created components to make sure their `ngOnDestroy` lifeCycle hook runs.
        //
        // For example, in the case of the AlertComponent, if by now its view is detached from the vcr,
        // its `ngOnDestroy` will never run. And somewhat the same situation happens to the `ngOnInit`
        // lifecycle hook if just after you create the component you call <ViewContainerRef>.detach()
        // as there will be no call for `ngOnInit` or other hooks related to component initialization,
        // It will only happen once it's view is reattached to vcr (in `showErrorAlert`)
        this.alertModalCompRef.destroy();

        // If we're already manually destroying the dynamically all created components, the call done
        // bellow is really unnecessary as their will be no view to clear.
        this.vcRef.clear();
    }
}
