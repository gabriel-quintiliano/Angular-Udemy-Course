console.log("FILE: header.component.ts roudou: ", Date.now())

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../authentication/services/auth.service';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    protected authenticated = false;
    private userSub!: Subscription;

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService,
        private router: Router
    ) {
        console.log("COMPONENT: HeaderComponent foi construído: ", Date.now())
    }
    
    ngOnInit() {
        console.log("ngOnInit: HeaderComponent rodou ngOnInit(): ", Date.now())
        this.userSub = this.authService.user.subscribe((authUser) => {
            // The core idea is that if we have a authenticated user,
            // authUser = `User` object, otherwise authUser = `null`

            this.authenticated = !!authUser;
            // The code above is a shortcut for the code below, it works
            // because `authenticated` expects a boolean value.
            //
            // if (authUser) {
            //     this.authenticated = true;
            // } else {
            //     this.authenticated = false;
            // }
        })
    }

    onLogout() {
        this.authService.logout();
        /* here there is no need to manually set `authenticated` property
         * to false because we already have set this properties value to be
         * based on the state of the user emitted from <AuthService>.user Subject,
         * thus, by only calling <AuthService>.logout() the user state within
         * <AuthService> will change and `authenticated` will automatically be
         * notified and have is value changed to `false`. */
    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe()
    }
}
