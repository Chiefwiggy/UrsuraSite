import React, {useState, useEffect} from 'react';
import { SpellData, ARCANOTYPE, CAST_TIME, TIME_UNIT, RANGE_UNIT, TARGET_UNIT } from '../../types/spell_type';
import SpellCardPreview from './SpellCardPreview';
import SpellCardDetailed from './SpellCardDetailed';

interface SpellCardTypes {
    spell_data: SpellData
}

export interface SpellText {
    level_text: string,
    range_text: string,
    duration_text: string,
    casting_time_text: string,
    arcanotype_text: string,
    uses_per_text: string,
    targets_text: string,
    free_cast_text: string
}

const SpellCard = ({
    spell_data
}: SpellCardTypes)  => {
    const [isPreviewOpen, setPreviewOpen] = useState<boolean>(false);
    const [currentSpellText, setCurrentSpellText] = useState<SpellText>({
        level_text: "",
        range_text: "",
        duration_text: "",
        casting_time_text: "",
        arcanotype_text: "",
        uses_per_text: "",
        targets_text: "",
        free_cast_text: ""
    });

    const {spell_level, arcanotype, cast_time, spell_duration, spell_duration_unit, spell_range, prep_cost, free_cost, prep_uses, spell_targets} = spell_data
    const {min_range, max_range} = spell_range.standard_range;

    const {target_count, target_unit, target_description} = spell_targets

    const convertToRankString = (sl: number): string => {
        switch(sl) {
            case 1:
                return "Beginner";
            case 2:
                return "Apprentice";
            case 3:
                return "Adept";
            case 4:
                return "Advanced";
            case 5:
                return "Expert";
            case 6: 
                return "Master"
            default:
                return "ERROR";
        }
    }

    useEffect(() => {
        setCurrentSpellTextHelper();
    }, [spell_data])

    const setCurrentSpellTextHelper = () => {
        const level_text = convertToRankString(spell_level);
        const arcanotype_text = (ARCANOTYPE[arcanotype]).toLocaleLowerCase();
        const casting_time_text = (CAST_TIME[cast_time]).toLocaleLowerCase().split('_').join(' - ');
        const duration_text = `${spell_duration > 0 ? spell_duration : ""} ${(TIME_UNIT[spell_duration_unit]).toLocaleLowerCase().slice(0,-1)}${spell_duration > 1 ? "s" : ""}${spell_duration_unit === TIME_UNIT.INSTANT ? "t" : ""}`
        const range_text = `${min_range.range_unit == RANGE_UNIT.MELEE ? "M" : "R"}${min_range.range_value} - ${max_range.range_unit == RANGE_UNIT.MELEE ? "M" : "R"}${max_range.range_value}`
        const uses_per_text = `${prep_uses}U / ${prep_cost}T`
        const targets_text = `${target_count} ${TARGET_UNIT[target_unit].toLocaleLowerCase().slice(0,-1)}${target_count > 1 ? "s" : ""} ${target_description ? '(' + target_description + ')' : ''}`;
        const free_cast_text = `${free_cost}T`
        
        const newSpellText: SpellText = {level_text, arcanotype_text, casting_time_text, duration_text, range_text, uses_per_text, targets_text, free_cast_text};
        setCurrentSpellText(newSpellText);
    }

    return (
        <div className="r-SpellCard">
            <SpellCardPreview spell_data={spell_data} isOpen={isPreviewOpen} openStatusDispatch={setPreviewOpen} spell_text={currentSpellText}/>
            <SpellCardDetailed spell_data={spell_data} isOpen={isPreviewOpen} spell_text={currentSpellText}/>
        </div>
    )
}

export default SpellCard;