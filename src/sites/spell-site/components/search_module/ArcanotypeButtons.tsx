import { ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, {useState} from 'react'
import { ButtonTheme } from '../../../../shared/styles/mui/generic_styles';

import '../../styles/ArcanotypeButtons.scss'
import useSearchCriteria from '../../hooks/useSearchCriteria/useSearchCriteria';

const ArcanotypeButtons = () => {

    const {setArcanotypeSelections, arcanotypesSelected} = useSearchCriteria();

    const handleArcanotypeSelection = (
        event: React.MouseEvent<HTMLElement>,
        newArcanotypes: string[],
    ) => {
        setArcanotypeSelections(newArcanotypes);
    }

    return (
        <ThemeProvider theme={ButtonTheme}>
            <ToggleButtonGroup
                value={arcanotypesSelected}
                onChange={handleArcanotypeSelection}
                aria-label="Arcanotypes"
                color="primary" 
                className="r-ArcanotypeButtons-Group"
            >
                <ToggleButton value="ANIMUS">
                    ANIMUS
                </ToggleButton>
                <ToggleButton value="AXUM">
                    AXUM
                </ToggleButton>
                <ToggleButton value="DIVINE">
                    DIVINE
                </ToggleButton>
                <ToggleButton value="ELEMENTAL">
                    ELEMENTAL
                </ToggleButton>
                <ToggleButton value="EONIC">
                    EONIC
                </ToggleButton>
                <ToggleButton value="MYSTICAL">
                    MYSTICAL
                </ToggleButton>
                <ToggleButton value="PRIMAL">
                    PRIMAL
                </ToggleButton>
                <ToggleButton value="ESOTERIC">
                    ESOTERIC
                </ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>
    )

}

export default ArcanotypeButtons;