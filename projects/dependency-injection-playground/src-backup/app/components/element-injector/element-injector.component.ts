import { Component, Input } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-element-injector',
	templateUrl: './element-injector.component.html',
	styleUrls: ['./element-injector.component.css'],
})
export class ElementInjectorComponent {
	@Input({ required: true }) id!: number;
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		Logger2Service.instanceCount++;
		console.log(`Elem Injector Comp #${this.id} got instance #${this.logger.getInstanceCount()} from LoggerService`)
		console.log(`check = ${Logger2Service.instanceCount}`)
	}
}
