import React from 'react';
import '../../styles/Icons.scss'
import { HtmlTooltip } from '../../helpers/tooltips';
const TetherLogo = require('../../assets/tether_icon.png');


const TetherIcon = () => {

    return (
        <HtmlTooltip
            title= {
                <React.Fragment>
                    <div className="r-KeywordTag-TooltipTitle">Tether</div>
                </React.Fragment>
            }
        >
            <img className="r-TetherIcon" src={TetherLogo} />
        </HtmlTooltip>
    )
}

export default TetherIcon;