import { Component } from '@angular/core';
import { Logger2Service } from '../../service-module/logger2.service';

@Component({
	selector: 'app-lazy-view2',
	templateUrl: './lazy-view2.component.html',
	styleUrls: ['./lazy-view2.component.css']
})
export class LazyView2Component {
	id = 'lazy2'
	constructor(private logger: Logger2Service) { }

	ngOnInit() {
		console.log(`${this.id} - got instance #${this.logger.id}\ncreated at ${this.logger.createdAtTimestamp}\n`)
	}
}
