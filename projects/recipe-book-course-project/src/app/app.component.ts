console.log("FILE: app.component.ts roudou: ", Date.now())

import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthService) {
        console.log("COMPONENT: AppComponent foi construído: ", Date.now())
    }

    ngOnInit() {
        // As that's the component that loads first, it makes some sense to
        // put this call here which will auto login if there are valid credentials
        // stored in local storage.
        console.log("ngOnInit: AppComponent rodou ngOnInit(): ", Date.now())
        this.authService.autoLogin()
    }
}
