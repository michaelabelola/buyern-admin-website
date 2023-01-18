import {BaseUrls} from "../enums/BaseUrls";
import axios from "axios";
import {Location} from "./Location";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    uid: string;
    contact: UserContact;
    location: Location;
    image: string;
    timeRegistered: string;
}

interface UserContact {
    id: number;
    email: string;
    phone: string;
    dob: string;
}

class UserController {
    private user: User;

    constructor(user: User) {
        this.user = user;

    }

    set = (user: User) => {
        this.user = user
    }

    get = () => this.user;

    fetch = (id: number): User => {
        return {} as User;
    }

    update = (user: User) => {
        this.user = user;
    }

    registerNew = (user: User) => {
        this.user = user;

        var data = new FormData();
        data.append('email', 'qwerty@gmail.com');
        data.append('city', '1');
        data.append('state', '2');
        data.append('country', '3');
        data.append('dob', '1989-12-12');
        data.append('firstName', 'Cerdo');
        data.append('lastName', 'Olorinla');
        data.append('image', `fs.createReadStream('/C:/Users/micha/OneDrive/Obrázky/logo2.png')`);
        data.append('phone', '09012345667');
        data.append('address', '20, gbagada way,');
        data.append('address2', 'irure est');
        data.append('password', 'password');

        var config = {
            method: 'post',
            url: `${BaseUrls.USER_URL}/user/register`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
                // ...data.getHeaders()
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export type {User, UserContact}