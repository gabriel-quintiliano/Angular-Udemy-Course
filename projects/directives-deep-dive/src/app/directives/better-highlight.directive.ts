import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

	constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		// the forth arg for setStyle method are optional flags like '!important', among others
		//this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "lightblue")
		// before having set @HostListener, I used this to style the element
	}

	@HostListener('mouseenter') onMouseOver() {
		this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "lightblue")
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "transparent")
	}
}
