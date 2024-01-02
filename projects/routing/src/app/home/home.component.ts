import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router,
                protected authService: AuthService) { }

	ngOnInit() {
	}

	onLoadServers(id: number) {
		this.router.navigate(['/servers'], { queryParams: { allowEdit: 1 }, fragment: 'loading' })
		// When dealing with route paths programatically directly inside the component,
		// there are some differences compared to doing the same in the html template.
		// Here, relative paths (ex: 'servers') passed to .navegate method need an extra
		// parameter as the this just doesn't know which route it currently sits in, thus
		// by default, when a relative path is used by itself with no further info, .navegate()
		// takes as reference 'root' i.e. '/'.
		//
		// Therefore, when it's needed you can inform .navegate which route this component
		// this component is currently at via a second param described as an object via the
		// key 'relativeTo', for example:
		// 
		// this.router.navigate(['/servers'], { relativeTo: ActivatedRoute* })
		//
		// ActivatedRoute is the type of object this key expects, thus the correct way to
		// pass it to the object is getting this value from angular itself via dependency
		// injection, so in the component constructor you should declare:
		//
		// constructor(/*other injectables*/, private route: ActivatedRoute ) { }
		// someMethod() {
		//     	this.router.navigate(['/servers'], { relativeTo: route })
		// }
		//
		// this way, .navegate() will know which path is the relative path relative to.
	}

    onLogin() {
        this.authService.login();
    }
    
    onLogout() {
        this.authService.logout();
    }
}
