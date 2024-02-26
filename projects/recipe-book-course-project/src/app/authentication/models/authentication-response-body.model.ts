console.log("MODEL: authentication-response-body.model.ts roudou: ", Date.now())

export type AuthenticationResponseBody = {
    "idToken": string,
    "email": string,
    "refreshToken": string,
    "expiresIn": string,
    "localId": string,
    "displayName"?: string,
    "registered"?: boolean,
}