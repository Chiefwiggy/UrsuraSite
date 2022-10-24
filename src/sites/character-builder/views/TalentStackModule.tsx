import React, {useState, useCallback, useReducer} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import produce from 'immer'
import ItemsModule from './ItemsModule'
import DragDropTemplate from '../components/dev/talent/DragDropTemplate'
import TalentBox from '../components/dev/talent/TalentBox'
import TalentList from '../components/dev/talent/TalentList'
import '../styles/TalentBox.scss'
import { SAMPLE_TALENTS } from '../sample-data/talent-sample'
import { Stack } from '@mui/material'


const dragReducer = produce((draft, action) => {
    switch(action.type) {
        case "MOVE": {
            draft[action.from] = draft[action.from] || [];
            draft[action.to] = draft[action.to] || [];
            const [removed] = draft[action.from].splice(action.fromIndex, 1);
            draft[action.to].splice(action.toIndex, 0, removed)
        }
    }
})

const applyMapping = (array) => {

    return array.map(item => {
        return {
            ...item,
            component: (
                <TalentBox data={item} />
            )
        }
    })
}

const TalentStackModule = ({

}) => {

    const [talentSlots, setTalentSlots] = useState(4);
    const [viewedTalent, setViewedTalent] = useState(null);

    const [state, dispatch] = useReducer(dragReducer, {
        items: applyMapping(SAMPLE_TALENTS),
        items2: applyMapping([])
    })

    const GetEquippedTalentCost = () => {
        return state.items2.reduce((pv, cv) => {
            return pv + cv.talentSlots;
        }, 0)
    }

    const onDragEnd = useCallback((result) => {
        if (result.reason === "DROP") {
            if (!result.destination) {
                return;
            }
            dispatch({
                type: "MOVE",
                from: result.source.droppableId,
                to: result.destination.droppableId,
                fromIndex: result.source.index,
                toIndex: result.destination.index
            })
        }
    }, [])

    const moveToEmptyList = useCallback((index) => {
        dispatch({
            type: "MOVE",
            from: "items2",
            to: "items",
            fromIndex: index,
            toIndex: 0
            
        })
    }, []);

    const processClick = useCallback((item, index) => {
        setViewedTalent(item);
    }, [])

    const updateViewDetails = useCallback((result) => {
        setViewedTalent(state[result.source.droppableId].find(e => e.id === result.draggableId))
    }, [state]);

    return (
        <div className="b-TalentStackModule">
            <div className="b-TalentStackModule-Select">
                <DragDropContext onDragEnd={onDragEnd} onDragStart={updateViewDetails}>
                    <div className="b-TalentStackParent">
                        <TalentList 
                            droppableId={"items"}
                            data={state.items}  
                            droppableClass={"b-TalentGrid"}
                            header={
                                <>
                                    <h3>Known Talents</h3>
                                    <span>Current Known: {state.items.length + state.items2.length}</span>
                                </>
                            }
                            clickHandle={processClick}
                        />
                        <TalentList 
                            droppableId={"items2"} 
                            data={state.items2}  
                            droppableClass={"b-TalentGrid"} 
                            full={GetEquippedTalentCost() > talentSlots}
                            header={
                                <>
                                    <h3>Equipped Talents</h3>
                                    <span>Equipped: {GetEquippedTalentCost()} / {talentSlots}</span>
                                </>
                            }
                            clickHandle={processClick}
                        />
                    </div>
                </DragDropContext>
                
            </div>
            <div className="b-TalentStackModule-After">
                <div className="b-TalentInfo">
                    <h2>{viewedTalent?.abilityName}</h2>
                    <h4>{viewedTalent?.source}</h4>
                    <span>{viewedTalent?.effect}</span>
                </div>
            </div>
        </div>
    )
}

export default TalentStackModule