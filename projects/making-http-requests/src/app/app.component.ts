import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedPosts = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {}

    onCreatePost(postData: { title: string; content: string }) {
        /* Send Http POST request - To better understand http request within Angular framework using
        * HttpClient injectable class, know that the request itself will only be sent after you
        * subscribe to the observable returned by, in this case, the .post() method, to handle the
        * reponse of the request - if no one is interested in the response no request will be sent.
        * Each HttpClient method has various overloads because of various different types of
        * response return values. In the case bellow, we're passing a plain JS object as
        * `body`, this object will be automatically converted into a json string (that's) what's
        * actually be sent as the resquest's body and then, again specifically for this case,
        * Angular will automatically extract the json string from the response body (as we're
        * dealing with a RESTFULL API) and convert it to a JS object (that's which we're getting
        * back to interact with in the observer we're subscribing)
        * 
        * About request headers, Angular itself will add some default headers for you, as done
        * bellow for example, but you can also define those provinding a object value to `options`
        * argument for the HttpClient method you're calling */
    
        this.http.post("https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts.json", postData)
        .subscribe((responseData) => {
            // responseData = { name: "idFromThisPostDataInDb" }
            console.log(responseData)
        });
    
        /* The `.../posts.json` above is specifically for Firebase Realtime Database, which in this
         * case with save `postData` in the "posts" folder - I don't really know why `.json` is needed
         * but it's also Firebase specific and it won't workout without it. */
    }
  
    onFetchPosts() {
        // Send Http request
    }
  
    onClearPosts() {
        // Send Http request
    }
}
