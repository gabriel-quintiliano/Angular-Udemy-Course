import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-game-control',
	templateUrl: './game-control.component.html',
	styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
	@Output('randomNumberGenerated') sendRandomNumber = new EventEmitter<number>();
	@Output('clearNumbersGenerated') sendClearRequest = new EventEmitter<number>();
	incrementNumber: number = 0;
	setIntervalId?: ReturnType<typeof setInterval>;
	isGameStarted: boolean = false;

	startGame(): void {
		// 		if (this.isGameStarted) {
		// 			console.log("the game has already been started");
		// 			window.alert("The game has already been started");
		// 			return;
		// 		}
		// 
		// 		this.isGameStarted = true;
		// 		this.setIntervalId = setInterval(() => {
		// 			let randIncrement = Math.floor(Math.random() * 1001) // random number between 0 and 10.000 (both included)
		// 			console.log("Evento emitido, nº ", randIncrement)
		// 			this.sendRandomNumber.emit(randIncrement)
		// 		}, 1000);

		let randIncrement = Math.floor(Math.random() * 1001) // random number between 0 and 10.000 (both included)
		console.log("Evento emitido, nº ", randIncrement)
		this.sendRandomNumber.emit(randIncrement)
	}

	stopGame() {
		this.isGameStarted = false;
		clearInterval(this.setIntervalId)
	}

	clearGame() {
		this.sendClearRequest.emit();
	}
}
