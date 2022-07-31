import React, {useEffect, useState} from 'react'




const HealthBox = ({
    character,
    classData
}) => {

    
    
    const CalculateStamina = () => {
        return character.race.bonuses.stamina 
            + Math.floor(character.stats.endurance.value * classData.modifiers.stamina)
            + character.bonuses.stamina
    }

    useEffect(() => {
        setCurrentStamina(CalculateStamina())
        setCurrentHealth(CalculateHealth());
        setCurrentTether(CalculateTether());
    }, [classData])
    
    const CalculateHealth = () => {
        return character.race.bonuses.health
            + Math.floor(character.stats.vitality.value * classData.modifiers.health)
            + character.bonuses.health
    }

    const CalculateRefresh = () => {
        return character.bonuses.refresh + character.stats.endurance.value
    }
    
    const CalculateDeathThreshold = () => {
        return -(character.stats.luck.value + character.stats.endurance.value + character.stats.vitality.value);
    }

    const CalculateTether = () => {
        return character.race.bonuses.tether
        + Math.floor(character.stats.mind.value * classData.modifiers.tether)
        + character.bonuses.tether;
    }

    const CalculateTetherRest = () => {
        return character.bonuses.tether_rest + character.stats.mind.value
    }

    const [currentStamina, setCurrentStamina] = useState(0);
    const [currentHealth, setCurrentHealth] = useState(0);
    const [currentTether, setCurrentTether] = useState(0);

    return (
        <div className="b-HealthBox">
            <div className="b-StaminaStats b-StatBox-TwoUnder">
                <div className="b-StatBox-TwoUnder-Wrapper">
                    <div className="b-StatBox-TwoUnder-Name">Stamina</div>
                    <div className="b-StatBox-TwoUnder-CurrentValue">{currentStamina}</div>
                </div>
                <div className="b-StatBox-TwoUnder-After">
                    <div className="b-StatBox-TwoUnder-AfterElement">
                        <div className="b-StatBox-TwoUnder-AfterElement-Title">
                            Max
                        </div>
                        <div className="b-StatBox-TwoUnder-AfterElement-Value">
                            {CalculateStamina()}
                        </div>
                    </div>
                    <div className="b-StatBox-TwoUnder-AfterElement">
                        <div className="b-StatBox-TwoUnder-AfterElement-Title">
                            Refresh
                        </div>
                        <div className="b-StatBox-TwoUnder-AfterElement-Value">
                            {CalculateRefresh()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="b-HealthStats b-StatBox-TwoUnder">
                <div className="b-StatBox-TwoUnder-Wrapper">
                    <div className="b-StatBox-TwoUnder-Name">Health</div>
                    <div className="b-StatBox-TwoUnder-CurrentValue">{currentHealth}</div>
                </div>
                <div className="b-StatBox-TwoUnder-After">
                    <div className="b-StatBox-TwoUnder-AfterElement">
                        <div className="b-StatBox-TwoUnder-AfterElement-Title">
                            Max
                        </div>
                        <div className="b-StatBox-TwoUnder-AfterElement-Value">
                            {CalculateHealth()}
                        </div>
                    </div>
                    <div className="b-StatBox-TwoUnder-AfterElement">
                        <div className="b-StatBox-TwoUnder-AfterElement-Title">
                            Death
                        </div>
                        <div className="b-StatBox-TwoUnder-AfterElement-Value">
                            {CalculateDeathThreshold()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="b-StaminaStats b-StatBox-TwoUnder">
                <div className="b-StatBox-TwoUnder-Wrapper">
                    <div className="b-StatBox-TwoUnder-Name">Tether</div>
                    <div className="b-StatBox-TwoUnder-CurrentValue">{currentTether}</div>
                </div>
                <div className="b-StatBox-TwoUnder-After">
                    <div className="b-StatBox-TwoUnder-AfterElement">
                        <div className="b-StatBox-TwoUnder-AfterElement-Title">
                            Max
                        </div>
                        <div className="b-StatBox-TwoUnder-AfterElement-Value">
                            {CalculateTether()}
                        </div>
                    </div>
                    <div className="b-StatBox-TwoUnder-AfterElement">
                        <div className="b-StatBox-TwoUnder-AfterElement-Title">
                            Refresh
                        </div>
                        <div className="b-StatBox-TwoUnder-AfterElement-Value">
                            {CalculateTetherRest()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthBox;