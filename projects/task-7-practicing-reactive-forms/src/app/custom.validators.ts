import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms"

export class CustomValidators {

    /* NOTE: ValidatorFn = (control: AbstractControl<any, any>) => ValidationErrors | null */
    static forbiddenProjectName: ValidatorFn = (control: AbstractControl<string | null>) => {
        // ? is necessary because in this case control.value can be `null`
        if (control.value?.toLowerCase() === 'test') {
            return {forbiddenProjectName: {value: control.value}}
        }
        return null
    }

    /* NOTE: AsyncValidatorFn = (control: AbstractControl<any, any>) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>*/
    static upperCaseEmail: AsyncValidatorFn = (control: AbstractControl<string | null>) => {
        const value = control.value

        const promise = new Promise< ValidationErrors | null>((resolve, reject) => {
            setTimeout(() => {
                // ? is necessary because in this case control.value (above) can be `null`
                if (value !== value?.toLowerCase()) {
                    resolve({upperCaseEmail: true})
                }
                resolve(null);
            }, 1000)
        })
        return promise;
    }
}