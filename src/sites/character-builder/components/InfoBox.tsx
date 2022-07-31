import React from 'react'
import "../../../shared/styles/General.scss"
import "../styles/InfoBox.scss"

const InfoBox = ({
    title,
    info_data,
    info_template,
    character
}) => {
    return (
        <div className="b-InfoBox">
            <h3>{title}</h3>
            <div className="b-InfoTemplateBox flex">
                <div className="column">
                    {
                        info_template.map(item => {
                            return (
                                <div className="text-align-left" key={item.name}>{item.name}</div>
                            )
                        })
                    }
                </div>
                
                <div className="column">
                    {
                        info_data.map((item, index) => {
                            return (
                                <div className="text-align-right" key={index}>{info_template[index].prefix}{item}{info_template[index].postfix}</div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )

}

export default InfoBox;