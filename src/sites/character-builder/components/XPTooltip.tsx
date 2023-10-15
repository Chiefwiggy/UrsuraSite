


import React, {useState, useEffect} from 'react'
import { CalculateXPToNext } from '../helpers/CalculateTotalXPUsed'
import "../../../shared/styles/General.scss"
import '../styles/XPStyles.scss'
import { red } from '@mui/material/colors'
import ClickNHold from 'react-click-n-hold'


const XPTooltip = ({
    stat_name,
    stat_info,
    total_stat_level,
    currentXPToSpend
}) => {

    const [XPtoNext, setXPtoNext]= useState(0);

    useEffect(() => {
        setXPtoNext(CalculateXPToNext(stat_info, total_stat_level));
    }, [total_stat_level])

    return (
        <div className="b-XPTooltip">
                <div className="b-TooltipContent" >
                        {stat_info.value < 30 ? (
                            <>
                            <div className="title-text">{stat_name}</div>
                            <div>Level {stat_info.value} -&gt; Level {stat_info.value+1}</div>
                            <div className={currentXPToSpend > XPtoNext ? 'success-text' : 'failure-text'}>{XPtoNext}XP</div>
                            </>
                        )
                        : (
                            <>
                            <div className="title-text">{stat_name}</div>
                            <div>Level 30</div>
                            <div>---</div>
                            </>
                        )}
                    
                </div>
        </div>
    )
}

export default XPTooltip