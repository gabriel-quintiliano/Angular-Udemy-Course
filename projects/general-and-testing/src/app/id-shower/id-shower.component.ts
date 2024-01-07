import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-id-shower',
  templateUrl: './id-shower.component.html',
  styleUrls: ['./id-shower.component.css']
})
export class IdShowerComponent {
    id!: string;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = params['id']
            console.log('params Observable ran in id shower! id: ', this.id)
        });
        console.log('ngOnInit ran in id shower! id: ', this.id)
    }

    addFragment() {
        this.router.navigate(["./"],{ relativeTo: this.route, fragment: String(Math.random()) })
    }
}
