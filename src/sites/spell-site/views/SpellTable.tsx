import React, {useEffect, useState} from 'react';
import SpellCard from "../components/spell_cards/SpellCard";
import { useQuery } from '@apollo/client';
import '../styles/SpellTable.scss';
import GET_ALL_SPELLS from '../queries/GET_ALL_SPELLS';
import useSearchCriteria from '../hooks/useSearchCriteria/useSearchCriteria';

const SpellTable = () => {

    const {currentSpells} = useSearchCriteria();

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
                    currentSpells.length > 0 ? currentSpells.map(spell => {
                        return (
                            <SpellCard spell_data={spell} key={"SPELL_DATA_"+spell.spell_name} />
                        )
                    })
                    : <div><br /><p>Uh oh! Looks like there are no spells that fit this criteria</p></div>
                }
                </div>
            </div>
        </div>
    )
}

export default SpellTable;