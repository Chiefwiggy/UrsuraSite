import { useEffect } from "react"
import LogLayout from "../layouts/LogLayout"
import { useNavigate } from 'react-router-dom'
import useUser from "../../../shared/hooks/user-hook/useUser";


const LogoutPage = () => {

    const navigate = useNavigate();
    const {LogoutUser} = useUser();
    

    useEffect(() => {
        LogoutUser()        
        setTimeout(() => {
            navigate("/")
        }, 750)
        
    }, [])

    return (
        <div className="LogoutPage">
            <h1>Logging Out</h1>
        </div>
    )
}

export default LogoutPage