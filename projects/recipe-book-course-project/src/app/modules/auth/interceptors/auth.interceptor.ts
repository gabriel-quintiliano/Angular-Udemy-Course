import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user || !user.token) {
                    return next.handle(request);
                }
                
                const authenticatedReq = request.clone({setParams: {auth: user.token}})
                return next.handle(authenticatedReq);
            })
        )
    }
}
