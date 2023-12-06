import { Component, Input } from '@angular/core';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-comp-teste1',
	templateUrl: './comp-teste1.component.html',
	styleUrls: ['./comp-teste1.component.css']
})
export class CompTeste1Component {
	@Input() id: number = 100;
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		Logger2Service.instanceCount++;
		console.log(`Comp Teste 1 id=#${this.id} got instance #${this.logger.getInstanceCount()} from LoggerService`)
		console.log(`check = ${Logger2Service.instanceCount}`)
	}
}

