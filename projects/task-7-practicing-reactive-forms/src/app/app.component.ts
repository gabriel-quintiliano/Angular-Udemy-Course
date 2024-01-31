import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    projectForm!: FormGroup;

    ngOnInit() {
        this.projectForm = new FormGroup({
            'projectName': new FormControl(null, [Validators.required, CustomValidators.forbiddenProjectName]),
            'email': new FormControl(null, [Validators.required, Validators.email], CustomValidators.upperCaseEmail),
            'status': new FormControl('stable', {nonNullable: true})
        })
    }

    /* Creating this getters really makes it easier to deal with these controls in the template and
     * also more make it all more readable there */
    get projectName() {
        return this.projectForm.get('projectName') as FormControl;
    }

    get email() {
        return this.projectForm.get('email') as FormControl;
    }

    onSubmit() {
        console.log(this.projectForm)
        this.projectForm.reset()
    }
}
