/* A user token and token expiration date should be private, so no other
 * part of the code can mess with that directly. Intead, it should be
 * accessable via a getter that will ensure it's still a valid token. */

export class User {

    private _tokenExpirationDate: Date;
    
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        tokenExpirationDate: Date | number
    ) {
        if (typeof tokenExpirationDate === 'number') {
            this._tokenExpirationDate = new Date(0, 0, 0, 0, 0, tokenExpirationDate);
        } else {
            // In this case `tokenExpirationDate` is a a `Date` object
            this._tokenExpirationDate = tokenExpirationDate;
        }
    }

    // this getter makes sure that whichever element that wants the token
    // only gets it if it's still valid. That's a GREAT validation you can do.
    get token() {
        // checks if there is no expiration date or token is already expired
        if (!this._tokenExpirationDate || new Date > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}