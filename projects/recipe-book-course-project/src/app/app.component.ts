import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthService) {}

    ngOnInit() {
        // As that's the component that loads first, it makes some sense to
        // put this call here which will auto login if there are valid credentials
        // stored in local storage.
        this.authService.autoLogin()
    }
}
