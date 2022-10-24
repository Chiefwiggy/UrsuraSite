import React from 'react'
import DragDropTemplate from './DragDropTemplate'

const TalentList = ({
    droppableId,
    data,
    droppableClass="",
    draggableClass="",
    full=false,
    header=<></>,
    clickHandle=(_,__)=>{}
}) => {
    return (
        <div>
            {header}
            <div className={`b-TalentList ${full ? "b-TalentList-Full" : ""}`}>
                <DragDropTemplate 
                    droppableId={droppableId} 
                    data={data} 
                    droppableClass={droppableClass} 
                    draggableClass={draggableClass}
                    clickHandle={clickHandle}
                />
            </div>
        </div>
    )
}

export default TalentList