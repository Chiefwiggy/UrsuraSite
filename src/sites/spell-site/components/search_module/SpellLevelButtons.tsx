import { ThemeProvider } from "@emotion/react";
import { ButtonTheme } from "../../../../shared/styles/mui/generic_styles";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import useSearchCriteria from "../../hooks/useSearchCriteria/useSearchCriteria";
import React from 'react';
import '../../styles/ArcanotypeButtons.scss'

const SpellLevelButtons = () => {

    const {spellLevelsSelected, setSpellLevelsSelected} = useSearchCriteria();

    const handleSpellLevelSelection = (
        event: React.MouseEvent<HTMLElement>,
        newSpellLevels: number[]
    ) => {
        setSpellLevelsSelected(newSpellLevels);
    }

    return (
        <ThemeProvider theme={ButtonTheme}>
            <ToggleButtonGroup
                value={spellLevelsSelected}
                onChange={handleSpellLevelSelection}
                aria-label="Spell Levels"
                color="primary" 
                className="r-ArcanotypeButtons-Group"
            >
                <ToggleButton value={1}>
                    BEGINNER
                </ToggleButton>
                <ToggleButton value={2}>
                    APPRENTICE
                </ToggleButton>
                <ToggleButton value={3}>
                    ADEPT
                </ToggleButton>
                <ToggleButton value={4}>
                    ADVANCED
                </ToggleButton>
                <ToggleButton value={5}>
                    EXPERT
                </ToggleButton>
                <ToggleButton value={6}>
                    MASTER
                </ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider> 
    )
}

export default SpellLevelButtons;