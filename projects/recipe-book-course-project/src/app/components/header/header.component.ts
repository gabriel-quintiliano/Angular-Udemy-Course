import { Component, OnDestroy, OnInit } from '@angular/core';
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
        private authService: AuthService
    ) {}

    ngOnInit() {
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
