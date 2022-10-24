import React from 'react'
import '../../../styles/TalentBox.scss'

const TalentBox = ({
    data
}) => {

    return (
        <div className="b-TalentBox">
            <div className={`b-TalentBoxContent b-TalentBox-${data.type}`}>
                <div className="b-TalentColumn">
                    <div className="b-TalentBox-Name">
                        {data.abilityName}
                    </div>
                    <div className="b-TalentBox-Source">
                        {data.source}
                    </div>
                </div>
                <div className="b-TalentColumn-Points">
                    <div className={`b-TalentBoxSlots-${data.type} b-TalentBoxSlotIcon`}></div>
                    <span className={`${data.talentSlots > 1 ? "b-BoldTalent" : ""} b-TalentBoxSlotCount `}>{data.talentSlots}</span>
                </div>
                
            </div>
            <div className={`${data.talentSlots > 1 ? data.talentSlots > 2 ? "b-TripleTalent" : "b-BigTalent" :  ""}`}>
                
            </div>
        </div>
    )
}

export default TalentBox;