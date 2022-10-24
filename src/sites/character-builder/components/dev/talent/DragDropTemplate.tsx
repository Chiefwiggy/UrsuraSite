import React, {useCallback, useReducer} from 'react'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import '../../../styles/TalentBox.scss'

const DragDropTemplate = ({
    droppableId,
    data,
    droppableClass="",
    draggableClass="",
    clickHandle=(_,__)=>{}
}) => {

    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        {...provided.dragHandleProps}
                        className={droppableClass}
                    >
                        {
                            data?.map((item, index) => {
                                return (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {
                                            (provided, snapshot) => {
                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        onClick={() => clickHandle(item, index)}
                                                        
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={draggableClass}
                                                    >
                                                        {item?.component ? item.component : item?.name}
                                                    </div>
                                                )
                                            }
                                        }
                                    </Draggable>
                                )
                            })
                        }
                        {provided.placeholder}
                    </div>
                )
            }}
        </Droppable>
    )
}

export default DragDropTemplate