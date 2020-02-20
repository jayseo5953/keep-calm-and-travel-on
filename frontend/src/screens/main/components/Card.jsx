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
          <div className='item-info'>
            <img className='item-photo' 
            src={`${props.item.image_url}`} alt="activty"/> <span className='item-name'>{props.item.name}</span>  <span className='item-price'>${props.item.price_cents/100}</span>  
          </div>
          {props.droppableId ==='list'?"": <button className='item-delete' onClick={()=> deleteCard(props.index, props.droppableId, props.columns, props.setColumns)}>Delete</button>}
        </div>
      );
    }}
    </Draggable>
  );
};

export default Card;