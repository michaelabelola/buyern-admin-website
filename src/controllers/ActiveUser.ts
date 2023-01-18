import {User} from "../model/User";

class ActiveUser {
    user: User;
    private localStorageId: string = "ACTIVE_USER";

    constructor(user: User) {
        this.user = user;
    }

    /*
    <h3>get user from server</h3>
    */
    fetchUserFromServer = (): User | undefined => {
        /*TODO: save data gotten from server locally updateUserLocally();*/
        return undefined;
    }

    /*
    <h3>get user from local storage</h3>
    if null fetch details from server
    */
    getUserFromLocalStorage = () => {
        let user = window.localStorage.getItem(this.localStorageId);
        if (!user || user === "") {
            return this.fetchUserFromServer();
        } else return this.user;
    }

    /*<h3>update on localstorage</h3>*/
    updateUserLocally(user: User) {
        this.user = user;
        window.localStorage.setItem(this.localStorageId, JSON.stringify(user));
    }
}

const activeUser = new ActiveUser(undefined as any);
export {activeUser}