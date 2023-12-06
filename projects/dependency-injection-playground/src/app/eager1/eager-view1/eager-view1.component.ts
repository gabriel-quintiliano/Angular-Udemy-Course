import { Component } from '@angular/core';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-eager-view1',
	templateUrl: './eager-view1.component.html',
	styleUrls: ['./eager-view1.component.css']
})
export class EagerView1Component {
	id = 'eager1'
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		console.log(`${this.id} - got instance #${this.logger.id}\ncreated at ${this.logger.createdAtTimestamp}\n`)
	}
}
