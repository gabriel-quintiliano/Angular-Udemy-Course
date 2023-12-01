import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

// This is a structural that is the opposite of *ngIf, therefore, the content
// will only be shown on screen if the condition is false
@Directive({
	selector: '[appUnless]'
})
export class UnlessDirective {

	// As far as I understood it, TemplateRef<any> will capture all the content inside the <ng-template>
	// tag (where the directive is intended to be used) and
	// ViewContainerRef will capture the locatation where the directive was used and can be
	// used as an "anchor" to that location to created/add/remove elements there
	constructor(private template: TemplateRef<any>, private vcRef: ViewContainerRef) { }

	// Firstly, we use a setter for this input for it to be dynamic/reactive hence if the
	// @Input value changes in the html template (where the directive was used, it changes here too),
	// and in second place to have "side effects" every time a new value is assigned to appUseless @Input.
	//
	// As the setter executes, we make sure condition is a boolean (for cases where a single value
	// is used as condition instead of an expression of boolean), then if condition is false
	// an embedded view, containing the content of the template, the is created at the location
	// where the directive was used in the html template, otherwise, if the condition is true
	// this same location is cleared and if there was something there, is going to disappear
	@Input() set appUnless(condition: any) {
		condition = Boolean(condition);
		if (!condition) {
			this.vcRef.createEmbeddedView(this.template)
		} else {
			this.vcRef.clear()
		}
	}

}
