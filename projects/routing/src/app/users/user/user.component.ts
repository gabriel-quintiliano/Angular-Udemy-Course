import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
	user!: { id: number, name: string };
	paramsSubscription!: Subscription;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		// this .snapshot.params method lets you retrieve the dynamic segments
		// setup for the route this component sits in, just specify which the
		// name of the param you want to retrieve (same name defined in the route setup)
		this.user = {
			id: this.route.snapshot.params['id'],
			name: this.route.snapshot.params['name']
		}

		// route.snapshot.params[] let's you have access to the params from dynamic segments
		// of the current route, it is static, thus you have the info from that moment and that's it.
		//
		// Meanwhile, route.params returns an observable to which you can subscribe and have a
		// callback executed every time some part of the current route changes, but the current
		// component keeps being display (and because of that, Angular doesn't destroy and recreates
		// the component as it's the same).
		//
		// taking this component as example, if a routerLink directive or route.navegate() changes
		// only the dynamic segments of this route (thus keeps '/users' and changes ':id' and or
		// ':name'), the callback below will be executed right way. If your component won't have
		// this kind of dynamicity, route.snapshot.params should be fine.
		this.paramsSubscription = this.route.params.subscribe(
			(params: Params) => {
				this.user.id = params['id'];
				this.user.name = params['name'];
			}
		)
		// you can use the only second approach and it will work fine, the two tough are used in
		// this component just for showing how each is used.
	}

	ngOnDestroy() {
		// Angular itself performs this unsubscription of the route.params automatically for you
		// on the background, but it is important to know that for your own observables, you will
		// need to unsubscribe manually or these will be kept in memory wasting performance.
		// 
		// This unsubscription below is what Angular would do automatically, but it makes no
		// difference if you actually want to do it manually to help building the habit of
		// unsubiscribing from observable every time the component is destroyed so you don't
		// forget to do it with your own observables.
		this.paramsSubscription.unsubscribe()
	}

}
