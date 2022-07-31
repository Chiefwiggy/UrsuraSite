import React from 'react'
import XPTooltip from './XPTooltip';

const MainStatBox = ({
    stat_name,
    stat_info,
    total_stat_level,
    currentXPToSpend
}) => {
    return (
        <div className="b-MainStatBox">
            <div className={`b-MainStatName ${stat_info.disposition}`}>{stat_name}</div>
            <div className={`b-MainStatValue`}>
                {stat_info.value}
            </div>
            <XPTooltip total_stat_level={total_stat_level} stat_name={stat_name} stat_info={stat_info} currentXPToSpend={currentXPToSpend} />
        </div>
    )
}

export default MainStatBox;