import { Component } from '@angular/core'
import { Input } from '@angular/core'

@Component({
	selector: 'app-warning-alert',
	templateUrl: './warning-alert.component.html',
	styleUrls: ['./warning-alert.component.css']
})

export class WarningAlertComponent {

	@Input() vemDoPai: string = 'xyzyxyzyxzyxzyxzyx';

	mouseOverIncidents: number = 0;
	valorTexto: string = 'default';
	nome: any = "Gabriel";
	len: number = this.nome.toUpperCase();

	updateVar(x: string) {
		console.log(x)
		this.valorTexto = x;
	}

	constructor() {
	}
}