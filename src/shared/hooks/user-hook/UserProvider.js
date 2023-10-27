import { useLazyQuery } from "@apollo/client";
import { UserContext } from "./UserContext"
import { useState } from "react";
import GET_ACCESS_LEVEL from '../../queries/GET_ACCESS_LEVEL'
import { useEffect } from "react";

const UserProvider = ({user, children}) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [accessLevel, setAccessLevel] = useState(0);

    const LogoutUser = () => {
        sessionStorage.clear()
        setAccessLevel(0);
        setLoggedIn(false);
    }

    const LoginUser = (user_data) => {
        sessionStorage.setItem("userToken", user_data.token);
        sessionStorage.setItem("userName", user_data.response.username);
        sessionStorage.setItem("userID", user_data.response._id);
        sessionStorage.setItem("userEmail", user_data.response.email)
        console.log(user_data);
        setAccessLevel(user_data.response.access_level);
        setLoggedIn(true);
    }


    

    const GetUserData = () => {
        return {
            userToken: sessionStorage.getItem("userToken"),
            userName: sessionStorage.getItem("userName"),
            userID: sessionStorage.getItem("userID"),
            userEmail: sessionStorage.getItem("userEmail")
        }
    }

    return (
        <UserContext.Provider value={{LogoutUser, LoginUser, GetUserData, loggedIn, accessLevel}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider