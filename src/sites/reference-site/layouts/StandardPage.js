import SiteBar from "../../../shared/views/SiteBar";

const StandardPage = ({children}) => {
    return (
        <div className="r-Page-Standard">
            <SiteBar currentPage={"reference"}/>
            tes
            {children}
        </div>
    )
}

export default StandardPage;