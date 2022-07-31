import React, { useEffect } from 'react'
import RankTooltip from '../components/RankTooltip'
import '../styles/RankModule.scss'

const RanksModule = ({
    CharacterData
}) => {

    return (
        <div className="b-RanksModule">
            <div className="b-Ranks-Gridbox">
                {
                    Object.entries(CharacterData.ranks).sort(([category_name, category_data], [category_name2, category_data2]) => {
                        if (Object.keys(category_data2).length - Object.keys(category_data).length === 0) {
                            return category_name.localeCompare(category_name2)
                        } else {
                            return Object.keys(category_data2).length - Object.keys(category_data).length
                        }
                    }).map(([category_name, category_data]) => {
                        return (
                            <div className="b-RankCategory" key={category_name}>
                            <h3 className="title-text"> {category_name} </h3>
                                <div className="b-RankCategory-Inner">
                                    {
                                        Object.entries(category_data).sort(([name1, rank1], [name2, rank2]) => {
                                            if (rank1 !== rank2) {
                                                return rank2 - rank1;
                                            } else {
                                                return name1.localeCompare(name2);
                                            }
                                        }).map(([rank_name, rank_data]) => {
                                            console.log(rank_name, rank_data);
                                            return (
                                                <RankTooltip rank_name={rank_name} rank_data={rank_data} />
                                            )
                                        })
                                    }
                                </div>

                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}


export default RanksModule;