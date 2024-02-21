import { SignUpResponseBody } from "./sign-up-response-body.model"

export type SignInResponseBody = SignUpResponseBody & {
    "displayName": string,
    "registered": boolean
}