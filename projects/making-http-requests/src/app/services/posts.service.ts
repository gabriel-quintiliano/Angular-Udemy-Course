import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post, PostData } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) { }

    createAndStorePost(postData: PostData): void {
        /* Returns an Observable that will send Http POST request when subscribed to.
         * To better understand http request within Angular framework using
         * HttpClient injectable class, know that the request itself will only be sent after you
         * subscribe to the observable returned by, in this case, the .post() method, to handle the
         * reponse of the request - if no one is interested in the response no request will be sent.
         * Each HttpClient method has various overloads because of various different types of
         * response return values. In the case bellow, we're passing a plain JS object as
         * `body`, this object will be automatically converted into a json string, that's what's
         * actually being sent as the resquest's body and then, again specifically for this case,
         * Angular will automatically extract the json string from the response body (as we're
         * dealing with a RESTFULL API) and convert it to a JS object (that's which we're getting
         * back to interact with in the observer we're subscribing)
         * 
         * About request headers, Angular itself will add some default headers for you, as done
         * bellow for example, but you can also define those provinding a object value to `options`
         * argument for the HttpClient method you're calling */
    
        // the http.post<T> generic type `T` is the expected return type which will be wrapped in an Observable;
        this.http.post<{ name: string }>("https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts.json", postData)
        .subscribe();
    
        /* The `.../posts.json` above is specifically for Firebase Realtime Database, which in this
         * case with save `postData` in the "posts" folder - I don't really know why `.json` is needed
         * but it's also Firebase specific and it won't workout without it. */
    }

    fetchPosts(): Observable<Post[] | undefined> {
        // Returns an Observable that when subscribed to will send a http GET request whose expected response value
        // in body is `Post[]`

        /* What's hapening bellow?
         *
         * The http.get() method returns an Observable which we modify using 'pipe' method and the `map` operator
         * to map the raw data from the Observable (an object of format: { [key: string]: { title: string, content: string } }
         * something like: { "-NqepnQ8AAYHMwurkUDJ": { title: "postTitle", content: "post content" }, {...}, {...} })
         * to an Array of Post type elements. */

        // the http.get<T> generic type `T` is the expected return type which will be wrapped in an Observable;
        return this.http.get<{ [key: string]: PostData } | undefined >("https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts.json")
        .pipe(map((responseData) => {
            // if there is no post in db to be fetched just return (undefined)
            if (!responseData) return

            const postArray: Post[] = [];

            for (let [id, postData] of Object.entries(responseData)) {
                postArray.push({id, ...postData})
            }
            
            return postArray;
        }))
    }

    deletePost(id: string) {
        this.http.delete(`https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts/${id}.json`)
        .subscribe()
    }

    deleteAllPosts() {
        this.fetchPosts().subscribe(posts => {
            if (!posts) return

            for (let post of posts) {
                this.deletePost(post.id);
            }
        })
    }
}

/* NOTE 1:
 * Regarding http requests, when the component might be interested in directly handling
 * the response value or performing an action after it completes, as for example in an http GET
 * request (i.e. `fetchPosts` method) return the Observable so the component can subscribe an
 * obeserver to it.
 * 
 * In other cases, when the http response doesn't matter, as for example in an http POST request
 * maybe (i.e. `createAndStorePost` method), the service can directly subscribe to the returned
 * Observable (as that's what triggers the request to be sent anyways) */


/* NOTE 2:
 * 2 reason why you don't need to care about unsubscribing from the Subscription returned
 * when subscribing to http.post(...)'s returned Observable everytime `createAndStorePost` method
 * is called or http.get(...)'s returned Observable:
 * 
 * 1. As these are Observables created by Angular
 * native features, Angular itself will automatically manage those and unsubscribe when it's time.
 * 2. After the http response for the http request sent, the Observable will complete, therefore,
 * all subscribers are automatically unsubscribed from this - This is a standard Observable
 * behaviour upon completion. */