import SiteBar from "../../../shared/views/SiteBar";


const AccountLayout = ({children}) => {
    return (
        <div className="Account-Page">
            <SiteBar currentPage={"account"}/>
            acct
            {children}
        </div>
    )
}

export default AccountLayout;