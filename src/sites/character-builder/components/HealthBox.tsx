import { LoadingButton } from '@mui/lab'
import { CircularProgress } from '@mui/material'
import React, {useEffect, useState, useRef} from 'react'

import "../styles/InfoBox.scss"




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
        return Math.floor(character.bonuses.tether_rest + 0.5*character.stats.mind.value);
    }

    const [currentStamina, setCurrentStamina] = useState<number>(0);
    const [currentHealth, setCurrentHealth] = useState<number>(0);
    const [currentTether, setCurrentTether] = useState<number>(0);

    const ChangeStamina = (e) => {
        setCurrentStamina(Math.min(CalculateStamina(),  isNaN(e.target.value) ? 0 : parseInt(e.target.value) ));
    }

    const ChangeHealth = (e) => {
        if (e.target.value > 0) {
            setCurrentHealth(Math.min(CalculateHealth(),  isNaN(e.target.value) ? 0 : parseInt(e.target.value) ));
        } else {
            setCurrentHealth(e.target.value);
        }
    }

    const ChangeTether = (e) => {
        setCurrentTether(Math.min(CalculateTether(), isNaN(e.target.value) ? 0 : parseInt(e.target.value) ));
    }

    
    return (
        <div className="b-HealthBox">
            <div className="b-Progress-Flex">
                <h2>Health</h2>
                <div className="b-ProgressBarGrid" >
                    <div className="b-ProgressBar-Text b-ProgressBarLayered">
                        <input className="b-ProgressBar-Input" value={currentHealth} onChange={ChangeHealth} type="number" min={CalculateDeathThreshold()}/>
                        <span className="b-ProgressBar-Max">{CalculateHealth()}</span>
                    </div>
                    <CircularProgress className="b-ProgressBar-Top b-ProgressBarLayered b-Health-Primary" variant="determinate" value={Math.max(((currentHealth)/ CalculateHealth())*100, 0)} color="inherit" size="6rem"/>
                    <CircularProgress className="b-ProgressBar-Top b-ProgressBarLayered b-Undeath-Primary" variant="determinate" value={
                        currentHealth < 0 ?
                        50*Math.max(-currentHealth/CalculateDeathThreshold(), -1)
                        : 0
                    } color="inherit" size="6rem"/>
                    <CircularProgress className="b-ProgressBar-Background b-ProgressBarLayered" variant="determinate" value={currentHealth >= 0 ? 100 : 0} color="inherit" size="6rem" />
                    <CircularProgress className={`b-ProgressBar-Background b-ProgressBarLayered ${currentHealth < 0 ? 'b-Undeath-Secondary' : ''}`}variant="determinate" value={currentHealth >= 0 ? 0 : 50} color="inherit" size="6rem" />
                    
                </div>
            </div>
            <div className="b-Progress-Flex">
                <h2>Stamina</h2>
                <div className="b-ProgressBarGrid" >
                    <div className="b-ProgressBar-Text b-ProgressBarLayered">
                        <input className="b-ProgressBar-Input" value={currentStamina} onChange={ChangeStamina} type="number"/>
                        <span className="b-ProgressBar-Max">{CalculateStamina()}</span>
                    </div>
                    <CircularProgress className="b-ProgressBar-Top b-ProgressBarLayered b-Stamina-Primary" variant="determinate" value={((currentStamina) / CalculateStamina())*100} color="inherit" size="6rem"/>
                    <CircularProgress className="b-ProgressBar-Bottom b-ProgressBarLayered b-Stamina-Secondary" variant="determinate" value={((currentStamina + character.stats.endurance.value + character.bonuses.refresh)/ CalculateStamina())*100} color="inherit" size="6rem" />
                    <CircularProgress className="b-ProgressBar-Background b-ProgressBarLayered" variant="determinate" value={100} color="inherit" size="6rem" />

                </div>
            </div>
            
            <div className="b-Progress-Flex">
                <h2>Tether</h2>
                {/* <span>{currentTether} {"->"} {currentTether + CalculateTetherRest()} / {CalculateTether()}</span> */}
                <div className="b-ProgressBarGrid" >
                    <div className="b-ProgressBar-Text b-ProgressBarLayered">
                        <input className="b-ProgressBar-Input" value={currentTether} onChange={ChangeTether} type="number"/>
                        <span className="b-ProgressBar-Max">{CalculateTether()}</span>
                    </div>
                    <CircularProgress className="b-ProgressBar-Top b-ProgressBarLayered b-Tether-Primary" variant="determinate" value={((currentTether)/ CalculateTether())*100} color="inherit" size="6rem"/>
                    <CircularProgress className="b-ProgressBar-Bottom b-Tether-Secondary b-ProgressBarLayered " variant="determinate" value={((currentTether + (character.stats.mind.value *0.5) + character.bonuses.tether_refresh)/ CalculateTether())*100} color="inherit" size="6rem" />
                    <CircularProgress className="b-ProgressBar-Background b-ProgressBarLayered" variant="determinate" value={100} color="inherit" size="6rem" />

                </div>
            </div>
            <div></div>
            <div className="b-Progress-Flex">
            </div>
        </div>
    )
}

export default HealthBox;