class AccessToken {
    token?: string;
    tokenId: string;

    constructor(tokenId: string) {
        this.tokenId = tokenId;
    }

    /*get token from localstorage*/
    getToken() {
        let token = window.localStorage.getItem(this.tokenId);
        if (!token || token === "")
            return "";
        else return this.token;
    }

    /*update token on localstorage*/
    updateTokenLocally(token: string) {
        this.token = token;
        window.localStorage.setItem(this.tokenId, token);
    }

    /*fetch token from server*/
    fetchToken = (oldToken: string) => {

    }

}

const userAccessToken = new AccessToken("USER_ACCESS_TOKEN");

export {AccessToken, userAccessToken};