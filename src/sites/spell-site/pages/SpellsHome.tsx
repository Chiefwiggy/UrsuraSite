import StandardPage from "../layouts/StandardPage"

import React from 'react';

import '../styles/SpellsHome.scss';
import SpellTable from "../views/SpellTable";

import KeywordProvider from '../hooks/useKeyword/KeywordProvider';
import SpellTableFooter from "../views/SpellTableFooter";
import SearchModule from "../views/SearchModule";
import CollectionsModule from "../views/CollectionsSubmodule";
import SearchCriteriaProvider from "../hooks/useSearchCriteria/SearchCriteriaProvider";

const SpellsHome = () => {
    return (
        <StandardPage>
            <SearchCriteriaProvider>
                <KeywordProvider>
                    <div className="s-Home-Page">
                        <SearchModule />
                        
                        <SpellTable />
                        <SpellTableFooter />
                    </div>
                </KeywordProvider>
            </SearchCriteriaProvider>
        </StandardPage>
    )
    
}

export default SpellsHome;