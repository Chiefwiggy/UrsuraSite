import StandardPage from "../layouts/StandardPage"

import React from 'react';

import '../styles/SpellsHome.scss';
import SpellTable from "../views/SpellTable";

import KeywordProvider from '../hooks/KeywordProvider';
import SpellTableFooter from "../views/SpellTableFooter";
import SearchModule from "../views/SearchModule";
import CollectionsModule from "../views/CollectionsModule";



const SpellsHome = () => {
    return (
        <StandardPage>
            <KeywordProvider>
                <div className="s-Home-Page">
                    <SearchModule />
                    <CollectionsModule />
                    <SpellTable />
                    <SpellTableFooter />
                </div>
            </KeywordProvider>
        </StandardPage>
    )
    
}

export default SpellsHome;