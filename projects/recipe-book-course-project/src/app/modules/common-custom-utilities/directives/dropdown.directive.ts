import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	isOpen = false;
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

	@HostListener('document:click', ['$event.target']) toggleDropdown(target: HTMLElement) {

		if (this.isOpen) {
			// if the dropdown is open, close it no matter where the click was
			// (including dropdown items)
			this.renderer.removeClass(this.dropdownMenuContainer.nativeElement, "show");
			this.isOpen = !this.isOpen;
		} else if (this.elem.nativeElement.contains(target)) {
			// if the dropdown is closed and the click was in any element within the dropdown element, open it
			this.renderer.addClass(this.dropdownMenuContainer.nativeElement, "show");
			this.isOpen = !this.isOpen;
		}

	}

}
