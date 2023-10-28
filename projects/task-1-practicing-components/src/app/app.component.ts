import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	itemDaChild: string = 'default do app';
	atualizar(x: string) {
		// console.log("valor de x = ", x)
		this.itemDaChild = x;
	}
}
