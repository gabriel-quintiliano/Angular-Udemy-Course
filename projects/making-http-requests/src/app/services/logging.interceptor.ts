import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class Logginginterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        /* this comment is for you to see that the registering order of interceptors matter,
         * that the order these will intercept the request */
        console.log('(LoggingInterceptor --> registerd second)');
        
        console.log(`[LoggingInterceptor] Outgoing ${request.method} request`);
        console.log('[LoggingInterceptor] Request headers: ', request.headers);
        return next.handle(request).pipe(tap(event => {
            if (event.type === HttpEventType.Sent) {
                console.log(`[LoggingInterceptor] ${request.method} request sent!`);
            } else if (event.type === HttpEventType.Response) {
                console.log('[LoggingInterceptor] Response just arrived!');
                console.log('[LoggingInterceptor] Response body is: ', event.body);
            }
        }));
    }
}