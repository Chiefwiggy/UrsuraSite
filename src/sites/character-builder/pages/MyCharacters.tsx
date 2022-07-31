import React from 'react'
import StandardPage from '../layouts/StandardPage'
import CharacterSheet from '../views/CharacterSheet';

const MyCharacters = () => {
    return (
        <StandardPage>
            <div className="b-myCharacters">
                <CharacterSheet />
            </div>
        </StandardPage>
    )
}

export default MyCharacters;