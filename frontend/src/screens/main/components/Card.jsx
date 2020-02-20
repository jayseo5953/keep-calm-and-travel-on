import React,{ useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd'
import deleteCard from '../helpers/deleteCard'

const Card = (props) => {

  return (
    <Draggable
      key={props.draggableId}
      draggableId={props.draggableId}
      index={props.index}
    >
      {(provided, snapshot) => {
      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='container-5'
          style={{
            userSelect: "none",
            backgroundColor: snapshot.isDragging
              ? "#263B4A"
              : "#456C86",
            ...provided.draggableProps.style
          }}
        >
          <img className='activity-image' 
          src={`${props.item.image_url}`} alt="activty"/> {props.item.name} ${props.item.price_cents/100} 
          {props.droppableId ==='list'?"": <button onClick={()=> deleteCard(props.index, props.droppableId, props.columns, props.setColumns)}>Delete</button>}
        </div>
      );
    }}
    </Draggable>
  );
};

export default Card;