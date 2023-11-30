import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

	constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

	// if you set the name of the selector of the directive as an alias to some @Input
	// you'll be able to use the directive in the element and set the input value all at once
	@Input() defaultColor: string = 'lightblue';
	@Input('appBetterHighlight') highlightColor: string = 'yellow';

	@HostBinding('style.backgroundColor') bgColor!: string; // it will have a value assigned on ngOnInit for sure.

	ngOnInit() {
		// the forth arg for setStyle method are optional flags like '!important', among others
		//this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "lightblue")
		// before having set @HostListener, I used this to style the element

		this.bgColor = this.defaultColor // to make sure there is a value to be assigned (after @Inputs are initialized)
	}

	@HostListener('mouseenter') onMouseOver() {
		// background color change via Renderer2 just like @HostBinding('style.backgroundColor') allows us
		// this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "transparent")
		this.bgColor = this.highlightColor;
	}

	@HostListener('mouseleave') onMouseLeave() {
		// background color change via Renderer2 just like @HostBinding('style.backgroundColor') allows us
		// this.renderer.setStyle(this.elemRef.nativeElement, "background-color", "lightblue")
		this.bgColor = this.defaultColor;
	}
}
