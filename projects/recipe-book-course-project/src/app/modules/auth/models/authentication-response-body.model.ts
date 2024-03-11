export type AuthenticationResponseBody = {
    "idToken": string,
    "email": string,
    "refreshToken": string,
    "expiresIn": string,
    "localId": string,
    "displayName"?: string,
    "registered"?: boolean,
}