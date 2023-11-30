import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

	constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

	@HostBinding('style.backgroundColor') bgColor: string = "lightblue";

	ngOnInit() {
		// the forth arg for setStyle method are optional flags like '!important', among others
		//this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "lightblue")
		// before having set @HostListener, I used this to style the element
	}

	@HostListener('mouseenter') onMouseOver() {
		// background color change via Renderer2 just like @HostBinding('style.backgroundColor') allows us
		// this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "transparent")
		this.bgColor = "transparent";
	}

	@HostListener('mouseleave') onMouseLeave() {
		// background color change via Renderer2 just like @HostBinding('style.backgroundColor') allows us
		// this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "lightblue")
		this.bgColor = "lightblue";
	}
}
