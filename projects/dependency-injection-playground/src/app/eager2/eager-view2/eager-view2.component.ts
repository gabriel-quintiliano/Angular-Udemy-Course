import { Component } from '@angular/core';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-eager-view2',
	templateUrl: './eager-view2.component.html',
	styleUrls: ['./eager-view2.component.css']
})
export class EagerView2Component {
	id = 'eager2'
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		console.log(`${this.id} - got instance #${this.logger.id}\ncreated at ${this.logger.createdAtTimestamp}\n`)
	}
}
