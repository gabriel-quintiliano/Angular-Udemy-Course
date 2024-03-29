import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    genders = ['male', 'female'];
    forbiddenNames = ['anna', 'john'];
    // See note on the end of this file to get more info about typed reactive forms
    signupForm!: FormGroup<signupFormSchema>;

    constructor(private fb: FormBuilder) {}



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
            'userData': new FormGroup({
                /* the `nonNullable: true` option will make sure that when the form is
                 * reset, the `username` input value goes back to this initial value set here
                 * ('Gabriel Q.' in this case) and if I'm not mistaken this will also set
                 * this control's default value to this same initial value (that the property
                 * the .reset() method looks at to reset the control's value to, which is by
                 * default `null`) */
                'username': new FormControl('Gabriel Q.', {nonNullable: true, validators: [Validators.required, this.forbiddenNamesValidator]}), // don't call the method, just pass the reference
                'email': new FormControl('', [Validators.required, Validators.email], this.forbiddenEmailsValidator), // use an array to pass multiple validators
            }),
            'gender': new FormControl('male'),
            'hobbies': new FormArray<FormControl<string | null>>([]) // self explanatory, an array of FormControls, seem more dynamic for "random" controls
        })

        /* Note: In the end FormGroup is used to "wrap" a collection of FormControl
         * instances and keep its states along side an overall state for the FormGroup
         * itself (or something like that) */

        // Observable that emits data whenever a form input value changes (sends new value)
        this.signupForm.valueChanges.subscribe((value) => {
            console.log("value changed to: ", value)
        });
        
        /* Observable that emits data whenever a form status changes (sends new status).
         * More specifically, I think that is whenever any validator function runs an thus
         * the form status might change */
        this.signupForm.statusChanges.subscribe((status) => {
            console.log("status changed to: ", status)
        });

        /* Just like, template-driven forms, in reactive forms the .setValue() method works
         * the same, you must provide and object (in this case) that is structurally the same
         * as the FormGroup's, if any key is missing or mispositioned, an error will appear */
        this.signupForm.setValue({
            'userData': {
                'username': 'Gabriel',
                'email': 'test@test.com'
            },
            'gender': 'male',
            'hobbies': []
        });

        /* The .patchValue() method is similar to .setValue() but you're abble to the value of
         * whatever control(s) you want without having to mimic the whole form structure */
        this.signupForm.patchValue({
            'userData': {
                'username': 'Gabriel Quintiliano',
            }
        })
    }

    /* Use the `ValidatorFn` as type to guide the creation of your custom validator function, as
     * this is the function signature type that a FormControl, FormArray or FormGroup expects. Each
     * of these objects calls the validator passing itself as argument to the `control` parameter 
     * 
     * The return value of the validator function will be assigned to the `errors` property of the
     * caller object, thus if validation fails, an "error code" should be returned (`ValidationErrors`)
     * or `null` if the validation succeeds (and therefore there is no error)
     * 
     * Ex: if you use the validator bellow in a FormControl and validation fails, you could access the
     * the error code as in:
     * <FormControl>.errors?.['forbiddenNames'] and have `true` returned.
     * (`?` assertion is needed as the `errors` property can be either `ValidationErrors` or `null`,
     * and thus if it's null or undefined (in case there are errors but not the error your looking
     * for), nothing breaks as JS (after compiling) won't go any futher as it doesn't exist)
     * 
     * If the validation succeeds, <FormControl>.errors === null */
    forbiddenNamesValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        if (this.forbiddenNames.indexOf(control.value) !== -1) {
            return {forbiddenName: true}
            /* In earlier versions, it seems to me that it was a standard for the "error code" to
             * follow the typing { [key: string]: boolean }, but in Angular version 16.2.8, this
             * is { [key: string]: any } aliased as `ValidationErrors`, so the value within that
             * object key can be anything you want */
        }
        return null
    }

    /* This is just like the validator above, but executes an asynchronous validation such as
     * going to a server (via a http request) to check if a value is valid or not.
     * Async validator functions return a promise or observable that provides `null` or 
     * `ValidationErrors` */
    forbiddenEmailsValidator: AsyncValidatorFn = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "teste@teste.com") {
                    resolve({forbiddenEmail: true})
                } else {
                    resolve(null)
                }
            }, 3000)
        });

        return promise;
    }

    onSubmit() {
        console.log(this.signupForm);
        /* The FormGroup .reset() method resets each control to its default value (null) or its initial
         * value (if the control was setup with the {nonnullable: true} option, such as i did with the
         * `name` control) or the new initial value provided in the object passed as argument to the method */
        this.signupForm.reset({
            'gender': 'female'
        })
    }

    onAddHobbies() {
        const control = new FormControl(null, Validators.required);

        /* The casting `as FormArray` is needed bellow because as of the type annotation for
         * the .get() method, the returned value will be `null` or `AbstractControl<any, any>`.
         * That is because this is the parent class of `FormGroup`, `FormArray`, `FormControl`,
         * which will be the actual value returned. So you need to assert the returned value
         * to one of these more specific types accordingly */
        (this.signupForm.get('hobbies') as FormArray).push(control);
    }

    getHobbiesControls() {
        return (this.signupForm.get('hobbies') as FormArray).controls;
    }
}

type signupFormSchema = {
    'userData': FormGroup<{
        'username': FormControl<string>,
        'email': FormControl<string | null>
    }>,
    'gender': FormControl<string | null>,
    'hobbies': FormArray<FormControl<string | null>>
}

/* NOTE: The initial approach I'd used above was as taught in the udemy course, it turns out that
 * by the time the course was recorded, typed forms didn't still exist, but now (after finishing)
 * the `reactive forms module` I learned that typed forms were introduced in Angular 14.
 * 
 * I thought of refactoring the whole logic above to leverage these typed forms. The easiest way
 * to achieve that would just be to initialize the form at once instead of creating the `singnupForm`
 * property and just initialize that in `ngOnInit()` method, because this way the typescript would
 * infer the whole form schema/structure and I'd be done.
 * 
 * But, because of the many comments I made, I ended up deciding to leave it all as it is and taking
 * a second approach that has the same effect (although more laborious), which is to create a form
 * schema and pass it as typing to FormGroup (I created the `signupFormSchema`)
 * 
 * Depending on how  you describe the controls, the form types may change a bit, mainly regarding if
 * a control is optional or mandatory and if its value might be `null` at some point of time.
 * 
 * Still another approach is to initialize the form using the FormBuilder or NonNullableFormBuilder 
 * services, through which you can skip writing a lot of boilerplate code. The NonNullableFormBuilder
 * is just like the FormBuilder but makes all form controls non-nullable by default, thus you get
 * away of writing `{nonNullable: true}` all the time. */