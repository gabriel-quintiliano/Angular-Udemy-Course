import { Component } from '@angular/core';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-lazy-view1',
	templateUrl: './lazy-view1.component.html',
	styleUrls: ['./lazy-view1.component.css']
})
export class LazyView1Component {
	id = 'lazy1'
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		console.log(`${this.id} - got instance #${this.logger.id}\ncreated at ${this.logger.createdAtTimestamp}\n`)
	}
}
