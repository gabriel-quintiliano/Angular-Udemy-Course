import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

	constructor(private elemRef: ElementRef) { }

	ngOnInit() {
		this.elemRef.nativeElement.style = 'background-color: limegreen'
	}
}
