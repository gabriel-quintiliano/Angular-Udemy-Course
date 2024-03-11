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