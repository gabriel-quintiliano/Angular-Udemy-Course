import { HttpErrorResponse } from "@angular/common/http";

export interface FirebaseHttpErrorResponse extends HttpErrorResponse {
    error: {
        error: CustomFirebaseError
    }
};

type CustomFirebaseError = {
    readonly code: number,
    readonly details?: readonly _CustomFirebaseErrorDetails[],
    readonly errors: readonly _CustomFirebaseErrorErrors[],
    readonly message: string,
    readonly status?: string,
}

type _CustomFirebaseErrorDetails = {
    readonly "@type": string,
    readonly domain: string,
    readonly metadata: {
        service: string
    },
    readonly reason: string,
}

type _CustomFirebaseErrorErrors = {
    readonly message: string,
    readonly domain: string,
    readonly reason: string
}