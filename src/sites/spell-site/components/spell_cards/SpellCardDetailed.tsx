import React from 'react';
import { SpellData } from '../../types/spell_type';

import '../../styles/SpellCard.scss';
import { SpellText } from './SpellCard';
import DetailHeaderItem from './DetailHeaderItem';

import KeywordTag from '../keyword_text/KeywordTag';
import {splitStringWithKeywords, parseTagString} from '../../helpers/convertDescriptionToArray';

interface SpellCardTypes {
    spell_data: SpellData
    isOpen: boolean,
    spell_text: SpellText
}

const SpellCardDetailed = ({
    spell_data,
    spell_text,
    isOpen
}: SpellCardTypes)  => {

    const {level_text, arcanotype_text, casting_time_text, duration_text, uses_per_text, range_text, targets_text, free_cast_text} = spell_text;
    const {spell_description, spell_name} = spell_data;

    const ExpandSpellDescription = () => {

        const spell_description_text = spell_description.map((paragraph, pindex) => {
            const paragraphArray = splitStringWithKeywords(paragraph);

            const elementArray = paragraphArray.map((entry, index) => {
                if (entry.startsWith('[')) {
                    const {tag_text, keyword} = parseTagString(entry);
                    return (
                        <KeywordTag keyword_id={keyword} keyword_text={tag_text} key={entry+index}/>
                    )
                } else {
                    return (
                        <span key={entry+index}>{entry}</span>
                    )
                }
            });
            return (
                <div className="r-SpellCard-Paragraph" key={spell_name+"_paragraph_"+pindex}>{elementArray}</div>
            );
        })
        return spell_description_text;
    }

    return (
        <div className="r-SpellCard-Detailed">
            <div className={isOpen ? "r-SpellCard-Details-Open" : "r-SpellCard-Details-Closed"}>  
                <div className="r-SpellCard-Details">
                    <div className="r-SpellCard-Details-Header">
                        <DetailHeaderItem detail_header={"Level"} detail_text={level_text} />
                        <DetailHeaderItem detail_header={"Range"} detail_text={range_text} />
                        <DetailHeaderItem detail_header={"Duration"} detail_text={duration_text} />
                        <DetailHeaderItem detail_header={"Casting Time"} detail_text={casting_time_text} />
                        <DetailHeaderItem detail_header={"Arcanotype"} detail_text={arcanotype_text} />
                        <DetailHeaderItem detail_header={"Targets"} detail_text={targets_text} />
                        <DetailHeaderItem detail_header={"Uses / Tether"} detail_text={uses_per_text} />
                        <DetailHeaderItem detail_header={"Free Cast"} detail_text={free_cast_text} />
                    </div>
                    <div className="r-SpellCard-DividerLine"></div>
                    <div className="r-SpellCard-Details-Description">
                        {ExpandSpellDescription()}
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default SpellCardDetailed;