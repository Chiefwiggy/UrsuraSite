import { UserContext } from "./UserContext"
import { useState } from "react";

const UserProvider = ({user, children}) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const LogoutUser = () => {
        sessionStorage.clear()
        setLoggedIn(false);
    }

    const LoginUser = (user_data) => {
        sessionStorage.setItem("userToken", user_data.token);
        sessionStorage.setItem("userName", user_data.response.username);
        sessionStorage.setItem("userID", user_data.response._id);
        sessionStorage.setItem("userEmail", user_data.response.email)
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
        <UserContext.Provider value={{LogoutUser, LoginUser, GetUserData, loggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider