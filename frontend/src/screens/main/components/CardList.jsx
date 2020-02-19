import React, {useEffect} from 'react';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'


const CardList = (props) => {
  
  useEffect(()=>{
    if (props.column.name !== 'List of Activities'){
      const listOfCosts = props.column.items.map((act)=>{
        return act.price_cents/100
      })
      console.log("list of costs: ", props.column.name, listOfCosts)
    
      const totalCosts = listOfCosts.reduce((a,b)=> a+b,0)
      console.log('total cost: ', totalCosts)
      
      let newState = {...props.columns}
      newState[props.columnId].total=totalCosts
      props.setColumns(newState)
    }
  },[props.column.items])

  return (
    <Droppable droppableId={props.columnId} key={props.columnId}>
    {(provided, snapshot) => {
      return (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className='container-4'
          style={{
            background: snapshot.isDraggingOver
              ? "lightblue"
              : "lightgrey"
          }}
        >
          {props.column.items.map((item, index) => {
            return (
              <Card
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