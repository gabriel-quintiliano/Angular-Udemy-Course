import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
    activated: boolean = false;
    activatedSubscrition!: Subscription;
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.activatedSubscrition = this.userService.activatedEmitter.subscribe((isActivated) => {
            this.activated = isActivated;
        })
    }

    ngOnDestroy() {
        this.activatedSubscrition.unsubscribe()
    }
}
