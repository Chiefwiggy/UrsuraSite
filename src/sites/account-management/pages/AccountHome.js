import AccountLayout from "../layouts/AccountLayout"
import AccessProtectedRoute from "../../../shared/components/AccessProtectedRoute"


const AccountHome = () => {
    return (
        <AccessProtectedRoute levelRequired={1} redirectURI={"/account/login"}>
            <AccountLayout>
                <div className="Account-Page">
                    account page
                </div>
            </AccountLayout>
        </AccessProtectedRoute>
        
    )
}

export default AccountHome;