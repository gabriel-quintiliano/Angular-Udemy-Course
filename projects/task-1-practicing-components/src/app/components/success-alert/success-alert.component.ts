import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-success-alert',
	template: `
		<div>
			<p>SUCCESS! WHAT YOU'VE DONE WAS RIGHT!</p>
			<input type="text" (input)="onInput(inp123.value)" #inp123>
		</div>`,
	styles: [`
		p {
		font-weight: 300;
		padding: 20px;
		background-color: lightgreen;
		border: 5px solid rgb(118, 188, 86);
		}`,
	]
})
export class SuccessAlertComponent {
	@Output() veioDaChild = new EventEmitter();

	onInput(value: string) {
		// console.log("valor enviado = ", value);
		this.veioDaChild.emit(value);
	}
}
