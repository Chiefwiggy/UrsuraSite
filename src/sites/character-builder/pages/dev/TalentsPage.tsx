import React from 'react'
import StandardPage from '../../layouts/StandardPage'
import TalentStackModule from '../../views/TalentStackModule'

const TalentsPage = () => {
    return (
        <StandardPage>
            <div className="b-TalentsPage">
                <TalentStackModule />
            </div>
        </StandardPage>
    )
}

export default TalentsPage;