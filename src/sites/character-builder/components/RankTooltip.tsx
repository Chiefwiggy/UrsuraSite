import React, { useEffect, useState } from 'react'
import { RANK_XP_REQUIRED } from '../data/reference/rank-reference';
import { SpToRank } from '../helpers/ConvertSPToRank';

const RankTooltip = ({
    rank_name,
    rank_data
}) => {

    const [barPercentage, setBarPercentage] = useState(0);
    const [SPLabel, setSPLabel] = useState("");

    useEffect(() => {
        if (rank_data >= 780) {
            setBarPercentage(100);
            setSPLabel("Max");
        } else if (rank_data > 0) {
            const rank = SpToRank(rank_data);
            const totalToNext = RANK_XP_REQUIRED[rank+1] - RANK_XP_REQUIRED[rank];
            setBarPercentage(100*((rank_data - RANK_XP_REQUIRED[rank]) / totalToNext))
            setSPLabel(`${rank_data - RANK_XP_REQUIRED[rank]}/${totalToNext}`)
        } else {
            setBarPercentage(0);
            setSPLabel("0/10")
        }
    }, [rank_data])

    return (
        <div className="b-RankEntry text-align-right " key={rank_name+"!@#"}>
            <div className="b-RankTooltip">
                <div className="b-RankTooltip-Flex">
                <span className="b-RankTooltip-Label">{SPLabel}</span>
                    <div className="b-RankTooltip-Container">
                        <div className="b-RankTooltip-Fill" style={{width: `${barPercentage}%`}}></div>
                    </div>
                </div>
            </div>
            <div className={`${rank_data > 0 ? 'b-Rank' : 'b-NoRank'}`}>
                <span className="b-RankNameText">{rank_name}</span>
                &nbsp;
                <span>{SpToRank(rank_data)}</span>
            </div>
        </div>
    )
}

export default RankTooltip;