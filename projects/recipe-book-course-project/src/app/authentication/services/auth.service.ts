import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpResponseBody } from '../models/sign-up-response-body.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<SignUpResponseBody>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmPLklaTyYdUsO2I-NMhDT8f39OW_YbWk',
            {email: email, password: password, 'returnSecureToken': true}
        );
    }
}
