import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        /* this comment is for you to see that the registering order of interceptors matter,
         * that the order these will intercept the request */
        console.log('(AuthInterceptor --> registerd first)');

        /* The request (HttpRequest object) is immutable, thus if you need to change it,
         * use the `clone` method, which accepts as argument an object with value updates
         * you want the modified request to have.
         * 
         * About <HttpRequest>.headers.append --> this is for when you want to have a new
         * HttpHeaders object returned with all already set headers and new ones appended */
        const modifiedRequest = request.clone({headers: request.headers.append('Authentication', 'Bearer <yourAuthenticationTokenGoesHere>')})

        /* You can interact with the request's corresponding HttpEvents (ex: sent, response, ...)
         * via pipeable operators from rxjs (see an example in the LoggingInterceptor) */
        return next.handle(modifiedRequest);
    }
}

/* NOTE: This is an interceptor (out of many your application can have), Angular itself
 * will manage the calling of the `intercept` method of your custom interceptors and pass
 * the HttpRequest as the `request` param and inject a HttpHandler as the `next` param,
 * then you deal with the request (generally you'll transform it in some way).
 * 
 * The calling of `next.handle(<transformedRequest>)` will pass the <transformedRequest>
 * for the next interceptor to handle (remember, `next` is a HttpHandler object), and 
 * finally, when there are no more interceptors, a last Angular handler (of class HttpBackend)
 * will send the resquest will all the transformations to the server/backend, then, from
 * that the Observable of HttpEvents related will be returned going backwards this chain
 * of handlers and interceptors.
 * 
 * The order each interceptors will intercept each is request is based on the order these
 * were provided in AppModule (or app.config.ts) provider's array.
 * 
 * Each interceptor as described above will also be able to deal with the response (and
 * other HttpEvents), to summarize, the request goes forward the chain of interceptors
 * in the order they were registered and the corresponding HttpEvents comes backwards
 * this same chain (and are finally delivered to the HttpClient method which sent the
 * request initially). */