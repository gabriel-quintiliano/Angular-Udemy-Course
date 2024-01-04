import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
    errorMessage!: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        // static way to recover data info passed in the corresponding path in the routing module
        // this.errorMessage = this.route.snapshot.data["message"];
        
        // dynamic way to recover data info passed in the corresponding path in the routing module,
        // this way if the value changes while this component is still loaded, the property
        // errorMessage will receive the new value automatically
        this.route.data.subscribe(
            (data: Data) => {
                // you need to make sure that this key exists in the `data` object by checking the
                // data key in the path in the corresponding routing module that serves this component
                this.errorMessage = data["message"];
            }
        );
    }
}
