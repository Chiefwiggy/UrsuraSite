import { Link } from "react-router-dom"

const SiteBar = ({currentPage}) => {
    return (
        <div className="SiteBar">
            {currentPage}
            <Link to="/">Reference</Link>
            <Link to="/spells">Spells</Link>
            <Link to="/builder">Character Sheets</Link>
            <Link to="/account">Account</Link>
            

            <Link to="/account/login">Login</Link>
        </div>
    )
}

export default SiteBar