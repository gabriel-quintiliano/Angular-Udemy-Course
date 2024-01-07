import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-placeholder',
	templateUrl: './placeholder.component.html',
	styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
	@Input() fillSpace: boolean = true;
    messageFromRoute!: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.messageFromRoute = this.route.snapshot.data['message'];

        const fillspaceRouteData = this.route.snapshot.data['fillspace']
        
        if (fillspaceRouteData) {
            this.fillSpace = Boolean(fillspaceRouteData);
        }
    }
	
    // About fillspace:
    // The default value is `true`, if it is defined via input, then we'll use that value
    // if it is defined by the route, then this value will be used regardless
}
