import { Component, Input } from '@angular/core';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-comp-teste2',
	templateUrl: './comp-teste2.component.html',
	styleUrls: ['./comp-teste2.component.css']
})
export class CompTeste2Component {
	@Input() id: number = 200;
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		Logger2Service.instanceCount++;
		console.log(`Comp Teste 1 id=#${this.id} got instance #${this.logger.getInstanceCount()} from LoggerService`)
		console.log(`check = ${Logger2Service.instanceCount}`)
	}
}
