import { Component } from '@angular/core';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-lazy-view3',
	templateUrl: './lazy-view3.component.html',
	styleUrls: ['./lazy-view3.component.css']
})
export class LazyView3Component {
	id = 'lazy3'
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		console.log(`${this.id} - got instance #${this.logger.id}\ncreated at ${this.logger.createdAtTimestamp}\n`)
	}
}
