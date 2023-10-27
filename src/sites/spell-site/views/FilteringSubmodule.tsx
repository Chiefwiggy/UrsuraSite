import React, {useReducer} from 'react'
import ArcanotypeButtons from '../components/search_module/ArcanotypeButtons';
import useSearchCriteria from '../hooks/useSearchCriteria/useSearchCriteria';
import SpellLevelButtons from '../components/search_module/SpellLevelButtons';
import { Button, IconButton } from '@mui/material';
import '../styles/SearchModule.scss';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const FilteringSubmodule = ({
    callCloseDispatch
}) => {

    const {triggerNewSearch, setArcanotypeSelections, setSpellLevelsSelected} = useSearchCriteria();

    const [lockState, dispatchLockState] = useReducer((_, action) => {
        switch(action.type) {
            case 'openLock':
                return false;
            case 'closeLock':
                return true;
        }
    }, false)

    const handleClickSearch = () => {
        if (!lockState) {
            callCloseDispatch();
        }
        triggerNewSearch();
    }

    const handleClearSearch = () => {
        setArcanotypeSelections([]);
        setSpellLevelsSelected([]);
    }

    return (
        <div className="r-FilteringSubmodule">
            <div className='r-FilteringFlexbox'>
                <h3>Filter Spells</h3>
                <ArcanotypeButtons/>
                <SpellLevelButtons />
                <div className="r-FilteringButtonPanel">
                    {
                        lockState
                        ?
                        <IconButton color="error" onClick={() => dispatchLockState({type: 'openLock'})}>
                            <LockOutlinedIcon fontSize='small'/>
                        </IconButton>
                        :
                        <IconButton color="success" onClick={() => dispatchLockState({type: 'closeLock'})}>
                            <LockOpenOutlinedIcon fontSize='small' />
                        </IconButton>
                    }
                    <Button color="warning" variant="outlined" onClick={handleClearSearch}>Clear</Button>
                    <Button color="secondary" variant="outlined" onClick={handleClickSearch}>Search</Button>
                </div>
            </div>
        </div>
    )
}

export default FilteringSubmodule;