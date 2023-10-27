import { PaginationData, SORT_ORDER, SortData } from "../../types/pagination_types";
import { SpellData } from "../../types/spell_type";
import { SearchCriteriaContext } from "./SearchCriteriaContext"
import React, {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/client'
import GET_ALL_SPELLS from "../../queries/GET_ALL_SPELLS";
import { SAMPLE_SPELL_LIST_1 } from "../../sample_data/sample_spells";
import GET_ALL_SPELLS_FILTERED from "../../queries/GET_ALL_SPELLS_FILTERED";

interface SpellFilterOutput {
    spell_list: Array<SpellData>,
    filteredLength: number
}

const SearchCriteriaProvider = ({
    children
}) => {

    const [searchBar, setSearchBar] = useState("");
    const [paginationData, setPaginationData] = useState<PaginationData>({
        length: 10,
        start: 0
    });
    const [sortData, setSortData] = useState<SortData>({
        order: SORT_ORDER.DESC,
        sortField: null
    })
    const [arcanotypesSelected, setArcanotypeSelections] = useState([]);
    const [spellLevelsSelected, setSpellLevelsSelected] = useState([]);

    const [currentSpells, setCurrentSpells] = useState<Array<SpellData>>(SAMPLE_SPELL_LIST_1);
    const [currentSpellCount, setCurrentSpellCount] = useState(0);

    const [triggerSpellSearch, {loading, data}] = useLazyQuery(GET_ALL_SPELLS_FILTERED);

    useEffect(() => {
        triggerNewSearch();
        console.log("TRIGGERED");
    }, [])


    useEffect(() => {
        triggerNewSearch();
    }, [paginationData])

    useEffect(() => {
        console.log("LOADS: ", loading);
        if (!loading) {
            console.log(data);
            const NewSpellData: SpellFilterOutput = data?.spells.GetAllFilteredSpells;
            console.log(NewSpellData);
            if (NewSpellData) {
                setCurrentSpells(NewSpellData.spell_list);
                setCurrentSpellCount(NewSpellData.filteredLength)
            }
        }
    }, [loading])

    const triggerNewSearch = (): void => {
        triggerSpellSearch({
            variables: {
                spellFilters: {
                    arcanotypes: arcanotypesSelected,
                    spell_levels: spellLevelsSelected,
                    pagination_data: paginationData
                }
            }
        })
    }

    return (
        <SearchCriteriaContext.Provider value={{
            searchBar, paginationData, sortData, arcanotypesSelected, spellLevelsSelected,
            setSearchBar, setPaginationData, setSortData, setArcanotypeSelections, setSpellLevelsSelected,
            currentSpells, triggerNewSearch, currentSpellCount
        }}>
            {children}
        </SearchCriteriaContext.Provider>
    )
}

export default SearchCriteriaProvider;