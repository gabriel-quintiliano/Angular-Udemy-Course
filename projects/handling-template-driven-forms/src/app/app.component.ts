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
    user = {
        username: '', 
        email: '',
        secretQuestion: '',
        answer: '',
        gender: ''
    };
    submitted = false;

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
        this.submitted = true;
        
        // just an example of how to easily access and use the values from TD form
        this.user.username = this.signupForm.value.userData.username;
        this.user.email = this.signupForm.value.userData.email;
        this.user.secretQuestion = this.signupForm.value.secret;
        this.user.answer = this.signupForm.value.questionAnswer;
        this.user.gender = this.signupForm.value.gender;

        /* The .reset() method resets all form control values to '' or an initial value
         * if this is passed as an argument (in the same format as in .patchValue() used
         * above). Meanwhile, the .resetForm() method does the same but also resets the
         * `submitted` property of the form to `false` if it'd previously submitted, I
         * don't know for sure, but may reset other properties too. */
        this.signupForm.reset({userData: {username: 'gabi'}})
        // this.signupForm.resetForm({userData: {username: 'gabi'}})
    }
}
