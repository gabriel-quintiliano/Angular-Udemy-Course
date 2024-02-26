import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
    constructor() {
        console.log("COMPONENT: LoadingSpinnerComponentS foi construído: ", Date.now())
    }

    ngOnInit() {
        console.log("ngOnInit: LoadingSpinnerComponentS rodou ngOnInit(): ", Date.now())
    }
}
