import SiteBar from "../../../shared/views/SiteBar";


const LogLayout = ({children}) => {
    return (
        <div className="Log-Page">
            <SiteBar currentPage={"account"}/>
            acct
            {children}
        </div>
    )
}

export default LogLayout;