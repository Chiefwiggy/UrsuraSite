import React, {useReducer} from 'react';

import { Drawer, IconButton} from '@mui/material';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

import '../styles/SearchModule.scss';
import FilteringSubmodule from './FilteringSubmodule';
import CollectionsSubmodule from './CollectionsSubmodule';

const SearchModule = () => {

    const [drawerState, dispatchDrawer] = useReducer((_, action) => {
        switch(action.type) {
            case 'openDrawer':
                console.log("OPEN");
                return true;
            case 'closeDrawer':
                console.log("CLOPEN");
                return false;
        }
    }, false)

    const [collectionsState, dispatchCollectionsDrawer] = useReducer((_, action) => {
        switch(action.type) {
            case 'openDrawer':
                console.log("OPEN");
                return true;
            case 'closeDrawer':
                console.log("CLOPEN");
                return false;
        }
    }, false)


    return (
        <div className="r-SearchModule">
            <div className="r-FilterIconButtonPane">
                <div className="r-FilterIconButtonPanel">
                    <IconButton onClick={() => dispatchDrawer({type: 'openDrawer'})}>
                        <FilterAltOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => dispatchCollectionsDrawer({type: 'openDrawer'})}>
                        <BookmarksOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <Drawer
                anchor={'right'}
                open={drawerState}
                onClose={() => dispatchDrawer({type: 'closeDrawer'})}
                variant="persistent"
                PaperProps={{style: {borderLeft: '2px solid #bb86fc'}}}
            >
                <div className="r-SearchPanelHeader">
                    <IconButton onClick={() => dispatchDrawer({type: 'closeDrawer'})}>
                        <ChevronRightOutlinedIcon />
                    </IconButton>
                </div>
                <FilteringSubmodule callCloseDispatch={() => dispatchDrawer({type: 'closeDrawer'})} />
                
            </Drawer> 
            <Drawer
                anchor={'right'}
                open={collectionsState}
                onClose={() => dispatchCollectionsDrawer({type: 'closeDrawer'})}
                variant="persistent"
                PaperProps={{style: {borderLeft: '2px solid #bb86fc'}}}
            >
                <div className="r-SearchPanelHeader">
                    <IconButton onClick={() => dispatchCollectionsDrawer({type: 'closeDrawer'})}>
                        <ChevronRightOutlinedIcon />
                    </IconButton>
                </div>
                <CollectionsSubmodule />
            </Drawer>          
        </div>
    )
}

export default SearchModule;