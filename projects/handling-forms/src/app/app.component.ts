import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('f') signupForm!: NgForm;
    defaultSecret = 'pet';
    answer = '';
    genders = ['male', 'female', 'other'];

    suggestUserName() {
        const suggestedName = 'Superuser';

        /* Access the `form` property of the NgForm object and use the method
         * .patchValue() to set a value for one or more form controls (these
         * values will also appear in the template), for that you just need to
         * pass as argument an object that partially matches the structure of
         * the TD form. As shown in the example bellow, the `username` prop is
         * inside a `userData` property, because that's how it is structured in
         * the actual form (via usage of ngModelGroup="userData". 
         * 
         * Though it makes no sense to also alter `gender` bellow, it's just for
         * demonstrating you can alter more that one form control at once*/
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName
            },
            gender: 'other'
        })

        /* Now if you want to set values for all the form controls at once, use the
         * .setValue() method of the NgForm, you just need to pass as argument an object
         * that matches the structure of the TD form (as in the example bellow)
         * there can be no key missing ou mismatch of structure, otherwise there
         * will be issued an error at runtime. */

        // this.signupForm.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: 'example@example.com'
        //     },
        //     secret: 'teacher',
        //     questionAnswer: '',
        //     gender: 'female',
        // })
    }

    onSubmit() {
        console.log(this.signupForm)
    }
}
