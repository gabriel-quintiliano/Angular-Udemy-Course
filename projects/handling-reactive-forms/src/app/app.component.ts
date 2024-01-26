import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    genders = ['male', 'female'];
    signupForm!: FormGroup;

    ngOnInit() {

        /* Although it may not be 100% necessary, just to be safe you may want write
         * the keys of the argument object used to initialize the FormGroup intance
         * wrapped in "" as this will make sure that during minification of the code,
         * these stay the same and don't get messed up (leading to runtime errors).
         * If you don't do that, you should be good and everything work just fine, but
         * there is apparently a chance for this kind of error to happen.
         * 
         * Regarding the FormControl constructor:
         * the 1st arg will be the initial control value (null = no initial value) 
         * the 2nd arg [optional] are the validators the control should run for the value
         * the 3rd arg [optional] are async validators
         * 
         * visit https://netbasal.com/angular-reactive-forms-tips-and-tricks-bb0c85400b58
         * for some really cool and useful tips on reactive forms
         */
        this.signupForm = new FormGroup({
            'username': new FormControl(null, Validators.required), // don't call the method, just pass the reference
            'email': new FormControl(null, [Validators.required, Validators.email]), // use an array to pass multiple validators
            'gender': new FormControl('male')
        })
    }

    onSubmit() {
        console.log(this.signupForm)
    }
}
