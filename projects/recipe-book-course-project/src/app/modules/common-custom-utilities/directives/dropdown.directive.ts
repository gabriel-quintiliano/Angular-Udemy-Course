import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	isOpened = false;
	// in no case this.dropdownMenuContainer will be undefined because if there is no
	// element to build this property out of, an error will be thrown in ngOnInit()
	dropdownMenuContainer!: ElementRef;

	constructor(private elem: ElementRef<HTMLElement>, private renderer: Renderer2) { }

	ngOnInit() {
		const elemChildren = Array.from(this.elem.nativeElement.children) as Array<HTMLElement>;
		const dropdownMenuFromDom = elemChildren.find(el => el.classList.contains("dropdown-menu"));

		if (!dropdownMenuFromDom) {
			throw new Error("The element which the `appDropdown` directive was used in must have a child element with class `dropdown-menu`")
		}

		this.dropdownMenuContainer = new ElementRef(dropdownMenuFromDom);
	}

	@HostListener('click') toggleDropdown() {

		if (!this.isOpened) {
			this.renderer.addClass(this.dropdownMenuContainer.nativeElement, "show");
		} else {
			this.renderer.removeClass(this.dropdownMenuContainer.nativeElement, "show");
		}

		this.isOpened = !this.isOpened;
	}

}
