import React from 'react'
import RankTooltip from '../components/RankTooltip'

const SkillsModule = ({
    character
}) => {
    return (
        <>
        <h3 className="title-text">Skills</h3>
        <div className="b-SkillsModule">
            <div className="b-Skills-Gridbox">
                {
                    Object.entries(character.skills).sort(([name1, rank1], [name2, rank2]) => {
                        if (rank1 !== rank2) {
                            return Number(rank2) - Number(rank1);
                        } else {
                            return name1.localeCompare(name2);
                        }
                    }).map(([name, sp]) => {
                        return (
                            <RankTooltip rank_name={name} rank_data={sp} />
                        )
                    })
                }
            </div>
        </div>

        </>
    )
}

export default SkillsModule