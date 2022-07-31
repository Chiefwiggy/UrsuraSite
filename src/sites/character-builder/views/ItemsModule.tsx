import React, {useState} from 'react'
import {Box, Tab, Tabs} from '@mui/material'
import {TabContext, TabPanel} from '@mui/lab'
import InventoryModule from './InventoryModule';
import QuickItemsModule from './QuickItemsModule';
import SpellsModule from './SpellsModule';
import SourcesModule from './SourcesModule';
import AddModule from './AddModule';

import '../styles/ItemsModules.scss'

const ItemsModule = ({
    character
}) => {

    const [tabValue, setTabValue] = useState('quickItems');

    const handleChange = (event, newValue) => {
        setTabValue(newValue)
    }

    return (
        <div className="b-ItemsModule">
            <div className="b-ItemsMenu">
                <TabContext value={tabValue}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={tabValue} onChange={handleChange}>
                            <Tab label="Quick Items" value="quickItems" />
                            <Tab label="Inventory" value="inventory" />
                            <Tab label="Spells" value="spells" />
                            <Tab label="Sources" value="sources" />
                            <Tab label="Add" value="add" />
                        </Tabs>
                    </Box>
                    <TabPanel value='quickItems' tabIndex={0}>
                        <QuickItemsModule character={character} />
                    </TabPanel>
                    <TabPanel value='inventory' tabIndex={1}>
                        <InventoryModule character={character}/>
                    </TabPanel>
                    <TabPanel value='spells' tabIndex={3}>
                        <SpellsModule character={character} />
                    </TabPanel>
                    <TabPanel value='sources' tabIndex={4}>
                        <SourcesModule character={character} />
                    </TabPanel>
                    <TabPanel value='add' tabIndex={5}>
                        <AddModule character={character} />
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    )
}

export default ItemsModule;