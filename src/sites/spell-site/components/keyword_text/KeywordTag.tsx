import React, {useEffect, useState} from 'react'
import useKeyword from '../../hooks/useKeyword'

import { Keyword } from '../../types/keyword_types'

import '../../styles/Keyword.scss';
import { HtmlTooltip } from '../../helpers/tooltips';

interface KeywordParams {
    keyword_id: string,
    keyword_text: string
}

const KeywordTag = ({
    keyword_id,
    keyword_text
}: KeywordParams) => {

    const {getKeyword, isLoaded} = useKeyword();

    const [currentKeyword, setCurrentKeyword] = useState<Keyword>(null);

    useEffect(() => {
        if(isLoaded) {
            setCurrentKeyword(getKeyword(keyword_id));
        }
    }, [isLoaded, keyword_id])

    return (
        <div className="r-KeywordTag">
            
            <HtmlTooltip
                title={
                    <React.Fragment>
                        <div className="r-KeywordTag-TooltipTitle">{currentKeyword?.name}</div>
                        {
                            currentKeyword?.description.map((line, line_index) => {
                                return <p className="r-KeywordTag-TooltipDesc" key={line+line_index}> {line}</p>
                            })
                        }
                        
                    </React.Fragment>
                }
            >
                <span className='r-KeywordTag-Text'>{keyword_text}</span>
            </HtmlTooltip>
        </div>
    )
}

export default KeywordTag;