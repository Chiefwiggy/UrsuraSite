import React, {useEffect, useState} from 'react'
import HealthBox from '../components/HealthBox'
import MainStatBox from '../components/MainStatBox'
import { SampleCharacter } from '../sample-data/character-sample'
import '../styles/CharacterSheet.scss'

import { CLASS_REFERENCE } from '../data/reference/class-reference';
import { CalculateTotalXPUsed } from '../helpers/CalculateTotalXPUsed'

import "../../../shared/styles/General.scss"
import InfoBox from '../components/InfoBox'
import { BASIC_INFO } from '../data/infobox/basic-info'
import { DEFENSE_INFO } from '../data/infobox/defense-info'
import { OFFENSE_INFO } from '../data/infobox/offense-info'
import RanksModule from './RanksModule'
import ".//../styles/CharacterBuilderGeneral.scss"
import SkillsModule from './SkillsModule'
import ItemsModule from './ItemsModule'


const CharacterSheet = () => {

    const [character, setCharacter] = useState(SampleCharacter)
    const [activeClassData, setActiveClassData] = useState({
        name: "loading",
        modifiers: {
            stamina: 0,
            health: 0,
            tether: 0
        }
    });

    const [TSL, setTSL] = useState(0);
    const [totalXPUsed, setTotalXPUsed] = useState(0);

    const [offenseInfo, setOffenseInfo] = useState([]);
    const [defenseInfo, setDefenseInfo] = useState([]);
    const [basicInfo, setBasicInfo] = useState([]);

    const [drag, setDrag] = useState(0);
    const [pDEFItem, setpDEFItem] = useState(0);
    const [mDEFItem, setmDEFItem] = useState(0);

    

    useEffect(() => {
        
        //deduce active class
        const [active_class_name, active_class_data] = Object.entries(CLASS_REFERENCE).map(([__, tier_data]) => {
            return Object.entries(tier_data).filter(([_, class_data]) => {
                return (class_data.id === character.info.active_class)
            })
        })[0][0];
        setActiveClassData({...active_class_data, name: active_class_name});


        //find total stat level
        const level = Object.values(character.stats).reduce((pv, cv) => {
            return pv + cv.value
        }, 0)
        setTSL(level);

        //find total xp used

        const xpused = CalculateTotalXPUsed(character, level);
        setTotalXPUsed(xpused);

        //separate stats
        setOffenseInfo([
            character.stats.finesse.value + Math.floor(character.stats.luck.value*0.5),
            character.stats.luck.value+Math.floor(character.stats.finesse.value*0.5),
            character.stats.agility.value - drag
        ])

        setBasicInfo([
            character.info.movement,
            `${drag} / ${character.stats.vitality.value}`, 
            character.info.active_class
        ])

        setDefenseInfo([
            6+character.ranks.mobility.evasion+character.stats.luck.value*Math.floor(0.5+character.stats.agility.value)+character.bonuses.dodge-drag,
            6+character.ranks.mobility.evasion+character.stats.luck.value*Math.floor(0.5+character.stats.agility.value)+character.bonuses.evasion-drag,
            character.stats.finesse.value+character.ranks.defenses.parry,
            Math.floor(character.stats.vitality.value*0.5+character.race.bonuses.physical_resistance+character.ranks.defenses.toughness+pDEFItem),
            Math.floor(character.stats.presence.value*0.5+character.race.bonuses.magical_resistance+character.ranks.defenses.abjuration+mDEFItem),
        ])


    }, [character, drag, pDEFItem, mDEFItem])

    return (
        <div className="b-CharacterSheet">
            <div className="flex">
                <div className="row">
                    <div className="column">
                        <div className="b-NameBox">
                            <div>{character.info.character_name} {TSL}</div>
                            <div>{character.info.xp-totalXPUsed}XP Remaining </div>
                            <div><em>Total: {character.info.xp} Used: {totalXPUsed}</em></div>
                        </div>

                        <div className="b-PrincipalStatsBox">
                            {
                                Object.entries(character.stats).map( ([stat_name, stat_info]) => {
                                    return <MainStatBox stat_name={stat_name} stat_info={stat_info} key={stat_name} total_stat_level={TSL} currentXPToSpend={character.info.xp-totalXPUsed} />
                                })
                            }
                        </div>
                        <SkillsModule character={character}/>
                        
                    </div>
                    <div className="column">
                        <div className="b-DerivedStatsRow">
                            <HealthBox character={character} classData={activeClassData} />
                        </div>
                        
                        <div className="b-InfoBoxes">
                            <InfoBox info_data={basicInfo} info_template={BASIC_INFO} character={character} title={"Basic Info"}/>
                            <InfoBox info_data={defenseInfo} info_template={DEFENSE_INFO} character={character} title={"Defenses"}/>
                            <InfoBox info_data={offenseInfo} info_template={OFFENSE_INFO} character={character} title={"Offenses"}/>
                        </div>
                        <div className="b-RankBoxes">
                            <RanksModule CharacterData={character} />
                        </div>
                    </div>
                    <div className="column">
                            <ItemsModule character={character} />
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default CharacterSheet