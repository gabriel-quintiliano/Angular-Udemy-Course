import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    projectForm = this.nnfb.group({
        'projectName': ['', [Validators.required, CustomValidators.forbiddenProjectName]],
        'email': ['', [Validators.required, Validators.email], CustomValidators.forbiddenProjectName],
        'status': 'stable'
    })

    // Equivalent code to create the same non-nullable form as above manually without the form builder:
    // projectForm = new FormGroup({
    //     'projectName': new FormControl('', {nonNullable: true, validators: [Validators.required, CustomValidators.forbiddenProjectName]}),
    //     'email': new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email], asyncValidators: CustomValidators.upperCaseEmail}),
    //     'status': new FormControl('stable', {nonNullable: true})
    // });

    constructor(private nnfb: NonNullableFormBuilder) { }

    /* Creating this getters really makes it easier to deal with these controls in the template and
     * also more makes it all more readable there */
    get projectName() {
        // ! in the end is the non-null assertion
        return this.projectForm.get('projectName')!;
    }

    get email() {
        // ! in the end is the non-null assertion
        return this.projectForm.get('email')!;
    }

    onSubmit() {
        console.log(this.projectForm)
        this.projectForm.reset()
    }
}
