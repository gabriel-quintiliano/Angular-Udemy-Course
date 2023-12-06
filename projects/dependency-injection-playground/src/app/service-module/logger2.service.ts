import { Injectable } from '@angular/core';
import { ServiceModuleModule } from './service-module.module';

@Injectable({
	providedIn: 'platform'
})
// @Injectable()
export class Logger2Service {
	static instanceCount = 0;
	id: number;
	createdAtTimestamp: number;

	constructor() {
		console.log("new instance Logger2Service created!");
		Logger2Service.instanceCount++;

		this.id = Logger2Service.instanceCount;
		this.createdAtTimestamp = Date.now()

	}
}