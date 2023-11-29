import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

	constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		// the forth arg for setStyle method are optional flags like '!important', among others
		this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "lightblue")
	}
}
