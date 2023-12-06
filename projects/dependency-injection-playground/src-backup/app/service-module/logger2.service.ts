import { Injectable } from '@angular/core';
import { ServiceModuleModule } from './service-module.module';

// @Injectable({
// 	providedIn: ServiceModuleModule
// })
@Injectable()
export class Logger2Service {
	static instanceCount = 0;

	constructor() {
		console.log("nova instancia")
		// LoggerService.instanceCount++;
	}

	getInstanceCount() {
		return Logger2Service.instanceCount;
	}
}
