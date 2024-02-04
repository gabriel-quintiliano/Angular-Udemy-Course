import { ValidatorFn } from "@angular/forms";

export class CustomValidators {

    /* I think this is necessary because eventhough in `<input type="number">` Angular will
     * automatically convert the inputted value to a number, there case whose conversion will
     * result in `NaN` or for incorrectly inputted cientific notations (e.g. 4e or +4e2), the
     * returned value will be `null`.
     * 
     * This way, if not properlly checked, these wrongfull values might cause runtime errors
     * as TypeScript would see those as regular numbers and theat them as such. */
    static number: ValidatorFn = (control) => {
        if (Number.isNaN(control.value) || control.value === null) {
            return {number: true}
        }
        return null
    }
}