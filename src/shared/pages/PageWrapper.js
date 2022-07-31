import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import LOGIN_ON_REFRESH from "../../sites/account-management/queries/LOGIN_ON_REFRESH";
import useUser from "../hooks/user-hook/useUser";


const PageWrapper = ({children}) => {

    const [LoginWithToken, {data: login_data}] = useMutation(LOGIN_ON_REFRESH);
    const {loggedIn, LoginUser} = useUser();
  
    useEffect(() => {
        if (sessionStorage.getItem("userEmail")) {
            LoginWithToken({variables: {
                email: sessionStorage.getItem("userEmail") ?? undefined,
                token: sessionStorage.getItem("userToken") ?? undefined
              }})
        }
    }, [])
  
    useEffect(() => {
      if (login_data && !loggedIn) {
        LoginUser(login_data.auth.SignInUserWithToken)
      }
    }, [login_data])





    return (
        <div className="PageWrapper">
            {children}
        </div>
    )
}

export default PageWrapper;