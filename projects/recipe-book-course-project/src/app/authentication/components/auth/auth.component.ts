import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    loginMode = true;
    isLoading = false;
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
                    console.log("response from signup: ", res)
                    this.isLoading = false;
                },
                error: err => {
                    console.log(err)
                    this.isLoading = false;
                }
            });
        }

        this.userDataForm.reset();
    }
}
