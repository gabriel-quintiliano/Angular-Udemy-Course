import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private firstObsSubscription!: Subscription;

    constructor() {}

    ngOnInit() {
        // the .subscription method returns a Subscription, which will latter on need
        // so that we can unsubscribe from that and prevent any "memory leaks" via
        // assynchronous that would keep being executed forever if there was no unsub
        // and there would eventually be the creation of multiple subscriptions as the
        // component kept being destroied and recreated
        
        this.firstObsSubscription = interval(1000).subscribe((count) => {
              console.log(count)
        })
    }
  
    ngOnDestroy() {
        // It's super important not to forget to unsubscribe from subscription
        // created earlier on throughout the component's lifecycle
        this.firstObsSubscription.unsubscribe()
    }
}
