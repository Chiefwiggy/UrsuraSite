import { KEYWORDS_EXAMPLE } from "../../sample_data/sample_keywords";
import { KeywordContext } from "./KeywordContext";
import React, { useEffect, useState } from "react";

import {Keyword} from '../../types/keyword_types';

const badKeyword: Keyword = {
    id: "ERROR",
    name: "Keyword Not Implemented",
    description: ["Something went wrong"]
}

const KeywordProvider = ({
    children
}) => {

    const [test, setTest] = useState("gamers");

    const [keywordList, setKeywordList] = useState<Map<string, Keyword>>(new Map());
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const KeywordMap: Map<string, Keyword> = new Map(KEYWORDS_EXAMPLE.map(keyword => {
            return [keyword.id, keyword]
        }));
        setKeywordList(KeywordMap);
        setIsLoaded(true);
    }, [])


    const getKeyword = (keyword_id): Keyword => {
        return keywordList.get(keyword_id) ?? badKeyword;
    }

    return (
        <KeywordContext.Provider value={{test, setTest, getKeyword, isLoaded}}>
            {children}
        </KeywordContext.Provider>
    )
}

export default KeywordProvider;