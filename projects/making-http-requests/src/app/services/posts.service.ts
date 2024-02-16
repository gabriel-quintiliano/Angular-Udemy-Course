import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map } from 'rxjs';
import { Post, PostData } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    /* A way to handle errors from http requests which are sent directly from the service,
     * hence the component won't have access to the Observable returned by the corresponding
     * HttpClient method (i.e. `deletePost` and `deleteAllPosts` methods), you can create a
     * Subject that emits the error message or the HttpErrorResponse object itself so the
     * component can subscribe and react to it. In this case though, I think it's a best 
     * practice to make sure you're providing this service in the component, otherwise you
     * might be reacting to an error that happened because of the request of another component
     * depending on your app's bussiness logic */
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(postData: PostData): Observable<{ name: string }> {
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
        return this.http.post<{ name: string }>("https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts.json", postData)
    
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
        return this.http.get<{ [key: string]: PostData } | undefined >(
            "https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts.json",
            {
                headers: { "My-Custom-Header": "hello", "My-Custom-Header-2": "hello 2" },
                params: { print: "pretty", "param-second": 2 }
                // - headers: you can also pass or create a new `HttpHeaders` object.
                // - params: for query params you can also pass or create a new `HttpParams`
                // object. Yes, it's the same as describing the same query params in the url,
                // but here it's a bit more convenient as you don't need to work with template
                // strings when dealing with dynamic query params.
            }
        )
        .pipe(
            map((responseData) => {
                // if there is no post in db to be fetched just return (undefined)
                if (!responseData) return

                const postArray: Post[] = [];

                for (let [id, postData] of Object.entries(responseData)) {
                    postArray.push({id, ...postData})
                }

                return postArray;
            }),
            catchError(err => {
                /* Send to analytics server or something else. The `catchError` operator only listens to the
                 * "error" channel and can be used to partially deal with the error, for example send it to
                 * some analytics server or such. After that, we can forward the error (as done bellow or
                 * return anything else)*/
                throw err;
            })
        )
    }

    deletePost(id: string) {
        // To delete a post individually, send a DELETE request to the specific url that targets it
        // (by its `id`). And in this case, add `.json` in this case as that's how Firebase Realtime Db works
        this.http.delete(`https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts/${id}.json`)
        .subscribe({
            error: (err: HttpErrorResponse) => {
                this.error.next(err.message);
            },
        })
    }

    deleteAllPosts() {
        // Ealier I had this approach, deleting one post at a time according to its id as follows:
        // this.fetchPosts().subscribe(posts => {
        //     if (!posts) return
        // 
        //     for (let post of posts) {
        //         this.deletePost(post.id);
        //     }
        // })

        // But then the instructor came up with the solution bellow, which deletes the whole `posts` folder
        // in the Firebase Realtime Db and is much more efficient.
        this.http.delete("https://angular-http-module-56e7f-default-rtdb.firebaseio.com/posts.json")
        .subscribe({
            error: (err: HttpErrorResponse) => {
                this.error.next(err.message);
            },
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