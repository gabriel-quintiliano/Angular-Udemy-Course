import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
         * there is apparently a chance for this kind of error to happen. */

        this.signupForm = new FormGroup({
            'username': new FormControl(null), // use `null` if you don't want the FormControl to have an initial value
            'email': new FormControl(null),
            'gender': new FormControl('male')  // eventhough in the template `gender` is a radio input, in the end is
                                               // just another normal FormControl (as described bellow), which will have
                                               // the initial value of 'male'
        })
    }
}
