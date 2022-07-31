import { Link } from "react-router-dom"
import useUser from '../hooks/user-hook/useUser'

const SiteBar = ({currentPage}) => {

    const {loggedIn, GetUserData} = useUser();

    

    return (
        <div className="SiteBar">
            {currentPage}
            <Link to="/">Reference</Link>
            <Link to="/spells">Spells</Link>
            <Link to="/builder">Character Sheets</Link>
            <Link to="/builder/my-characters">Character Sheets</Link>
            {
                loggedIn
                ?
                    <>
                    <Link to="/account">Account</Link>
                    <Link to="/account/logout">Logout</Link>
                    </>
                : 
                    <Link to="/account/login">Login</Link>
            }
        </div>
    )
}

export default SiteBar