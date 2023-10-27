import React from 'react'
import TetherIcon from '../icons/TetherIcon';

const DetailHeaderItem = ({
    detail_header,
    detail_text,
    tether_trail=false,
    doShow = true
}) => {
    return doShow ? (
        <div className="r-SpellCard-Details-HeaderItem">
            <div className="r-SpellCard-Title">{detail_header}</div>
            <div className="r-SpellCard-Text"><span>{detail_text} {
                tether_trail 
                ? <TetherIcon />
                : <></>
            }</span></div>
            
        </div>
    ) : <></>
}

export default DetailHeaderItem;