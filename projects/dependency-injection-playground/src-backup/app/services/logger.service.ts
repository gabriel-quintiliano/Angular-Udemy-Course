import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoggerService {
	static instanceCount = 0;

	constructor() {
		console.log("nova instancia")
		// LoggerService.instanceCount++;
	}

	getInstanceCount() {
		return LoggerService.instanceCount;
	}
}
