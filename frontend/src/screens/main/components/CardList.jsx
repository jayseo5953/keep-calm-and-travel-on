import React, {useEffect} from 'react';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'
import uuid from 'uuid/v4'


const CardList = (props) => {
  
  useEffect(()=>{
    if (props.column.name !== 'List of Activities'){
      const listOfCosts = props.column.items.map((act)=>{
        return act.price_cents/100
      })
      // console.log("list of costs: ", props.column.name, listOfCosts)
    
      const totalCosts = listOfCosts.reduce((a,b)=> a+b,0)
      // console.log('total cost: ', totalCosts)
      
      let newState = {...props.columns}
      newState[props.columnId].total=totalCosts
      props.setColumns(newState)
    }
  },[props.column.items])

  return (
    <Droppable 
    droppableId={props.columnId}
    key={props.columnId}
    isDropDisabled={props.columnId==='list'}
    >
    {(provided, snapshot) => {
      return (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={props.columnId==='list'?'container-4 list':"container-4"}
          style={{
            background: snapshot.isDraggingOver
              ? "lightblue"
              : "lightgrey"
          }}
        >
          {props.column.items.map((item, index) => {
            return (
              <Card
                isClone='true'
                key={item.id}
                draggableId={item.id}
                droppableId={props.columnId}
                index={index}
                item={item}
                setColumns={props.setColumns}
                columns={props.columns}
              />
            );
          })}
          {provided.placeholder}
        </div>
      );
    }}
  </Droppable>
  );
};

export default CardList;