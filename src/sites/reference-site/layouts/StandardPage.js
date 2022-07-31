import SiteBar from "../../../shared/views/SiteBar";
import ReferenceNavigationPanel from "../views/ReferenceNavigationPanel";

const StandardPage = ({children}) => {
    return (
        <div className="r-Page-Standard">
            <SiteBar currentPage={"reference"}/>



            <ReferenceNavigationPanel />


            
            {children}
        </div>
    )
}

export default StandardPage;