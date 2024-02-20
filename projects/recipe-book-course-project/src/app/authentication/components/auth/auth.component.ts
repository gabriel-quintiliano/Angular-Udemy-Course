import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    loginMode = true;
    userDataForm = this.nnfb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    })

    constructor(private nnfb: NonNullableFormBuilder) { }

    onSwitchMode() {
        // reverses the previously stored boolean value;
        this.loginMode = !this.loginMode;
    }

    onSubmit() {
        if (!this.userDataForm.valid) return
        console.log(this.userDataForm);
    }
}
