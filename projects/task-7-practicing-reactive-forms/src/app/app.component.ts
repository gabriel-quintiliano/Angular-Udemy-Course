import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, Form, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    projectForm!: FormGroup;

    ngOnInit() {
        this.projectForm = new FormGroup({
            'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNamesValidator]),
            'email': new FormControl(null, [Validators.required, Validators.email], this.upperCaseEmailValidator),
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

    /* NOTE: ValidatorFn = (control: AbstractControl<any, any>) => ValidationErrors | null */
    forbiddenProjectNamesValidator: ValidatorFn = (control) => {
        if (control.value?.toLowerCase() === 'test') {
            return {forbiddenProjectName: {value: control.value}}
        }
        return null
    }

    /* NOTE: AsyncValidatorFn = (control: AbstractControl<any, any>) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>*/
    upperCaseEmailValidator: AsyncValidatorFn = (control) => {
        const value = control.value

        const promise = new Promise< ValidationErrors| null>((resolve, reject) => {
            // ? is necessary because in this case control.value can be `null`
            if (value !== value?.toLowerCase()) {
                resolve({upperCaseEmail: true})
            }
            resolve(null);
        })
        return promise;
    }
}
