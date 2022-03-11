import { UserContext } from "./UserContext"
import { useState } from "react"

const UserProvider = ({user, children}) => {
    const [currentUser, setCurrentUser] = useState({
        loggedIn: false,
        username: undefined,
        email: undefined,
        _id: undefined,
        token: undefined
    });

    const LogoutUser = () => {
        setCurrentUser({
            loggedIn: false,
            username: undefined,
            email: undefined,
            _id: undefined,
            token: undefined
        })
    }

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, LogoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider