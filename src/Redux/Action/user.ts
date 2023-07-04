import { client4All } from "../../Client/client4All";
import { User } from "../../Types/user";

export const LOGIN = "LOGIN";

export const login = (user: User) => {
    return (dispatch:any)=>{
        return client4All('post','auth/login/',user)
    }

};
