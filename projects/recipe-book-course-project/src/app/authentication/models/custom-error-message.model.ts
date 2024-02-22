
// export const CustomErrorMessage: {[key in keyof typeof FirebaseHttpErrorResponseCode]: string} = {
export const CustomErrorMessage = {
    EMAIL_EXISTS: "This email is already signed up, try login in.",
    INVALID_ARGUMENT: "API key not valid. Please pass a valid API key.",
    USER_DISABLED: "This account has been disabled.",
    TOKEN_EXPIRED: "Session expired, you must login again.",
    USER_NOT_FOUND: "This user was not found.",
    INVALID_REFRESH_TOKEN: "Invalid refresh token provided.",
    INVALID_GRANT_TYPE: "Invalid grant type provided",
    INVALID_LOGIN_CREDENTIALS: "Email or password is invalid.",
    MISSING_REFRESH_TOKEN: "No refresh token provided",
} as const;