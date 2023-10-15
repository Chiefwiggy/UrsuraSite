import React from 'react'

const DetailHeaderItem = ({
    detail_header,
    detail_text
}) => {
    return (
        <div className="r-SpellCard-Details-HeaderItem">
            <div className="r-SpellCard-Title">{detail_header}</div>
            <div className="r-SpellCard-Text">{detail_text}</div>
        </div>
    )
}

export default DetailHeaderItem;