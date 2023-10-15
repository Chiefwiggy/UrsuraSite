import SiteBar from "../../../shared/views/SiteBar";

import '../styles/StandardPage.scss';

const StandardPage = ({children}) => {
    return (
        <div className="s-Page-Standard">
            <SiteBar currentPage={"spells"} />
            {children}
        </div>
    )
}

export default StandardPage;