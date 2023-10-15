import React from 'react';
import {SpellData } from '../../types/spell_type';

import '../../styles/SpellCard.scss';
import { SpellText } from './SpellCard';

interface SpellCardTypes {
    spell_data: SpellData,
    spell_text: SpellText,
    isOpen: boolean,
    openStatusDispatch: React.Dispatch<React.SetStateAction<boolean>>
}

const SpellCardPreview = ({
    spell_data,
    spell_text,
    isOpen,
    openStatusDispatch
}: SpellCardTypes)  => {

    const {level_text, arcanotype_text, casting_time_text, duration_text, uses_per_text, range_text} = spell_text;
    const {spell_name, isRoleplay} = spell_data;

    const handleCardOpen = (event) => {
        openStatusDispatch(!isOpen);
    }

    return (
        <div className="r-SpellCard-Preview">
            <div className="r-SpellCard-Preview-Grid" onClick={handleCardOpen}>
                <div className="grid-item">IMAGE</div>
                <div className="grid-item">{level_text}</div>
                <div className="grid-item">
                    <div className="name-display">
                        <div id="spell-name">{spell_name}</div>
                        <div id="name-data">
                            <span>{arcanotype_text}</span>
                            {isRoleplay ? (<span> • Roleplay</span>) : <></>}
                        </div>
                    </div>
                </div>
                <div className="grid-item">{casting_time_text}</div>
                <div className="grid-item">{duration_text}</div>
                <div className="grid-item">{range_text}</div>
                <div className="grid-item">{uses_per_text}</div>
            </div>
            
        </div>
    )
}

export default SpellCardPreview;