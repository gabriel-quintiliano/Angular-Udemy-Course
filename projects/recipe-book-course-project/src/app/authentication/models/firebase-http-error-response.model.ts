console.log("MODEL: firebase-http-error-response.model.ts roudou: ", Date.now())
import { HttpErrorResponse } from "@angular/common/http";

export interface FirebaseHttpErrorResponseForAuthenticationAPI extends HttpErrorResponse {
    error: {
        error: CustomFirebaseAuthError
    }
};

type CustomFirebaseAuthError = {
    readonly code: number,
    readonly errors: readonly _CustomFirebaseErrorErrors[],
    readonly message: string,
}

type _CustomFirebaseErrorErrors = {
    readonly message: string,
    readonly domain: string,
    readonly reason: string
}