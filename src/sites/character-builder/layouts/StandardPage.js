import SiteBar from "../../../shared/views/SiteBar";

const StandardPage = ({children}) => {
    return (
        <div className="r-Page-Standard">
            <SiteBar currentPage={"builder"}/>
            tes
            {children}
        </div>
    )
}

export default StandardPage;