import React from 'react';
import SpellCard from "../components/spell_cards/SpellCard";

import '../styles/SpellTable.scss';

import { SAMPLE_SPELL_LIST_1 } from "../sample_data/sample_spells";
import SpellTableFooter from './SpellTableFooter';

const SpellTable = () => {


    return (
        <div className="r-SpellTable">
            <div className="r-SpellTable-AlignFix">
                <div className="r-SpellTable-Header"> 
                    <div></div>
                    <div>TIER</div>
                    <div>NAME</div>
                    <div>CAST TIME</div>
                    <div>DURATION</div>
                    <div>RANGE</div>
                    <div>USES / TETHER</div>
                </div>
                <div className="r-SpellTable-SpellCards">
                {
                    SAMPLE_SPELL_LIST_1.map(spell => {
                        return (
                            <SpellCard spell_data={spell} key={"SPELL_DATA_"+spell.spell_name} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default SpellTable;