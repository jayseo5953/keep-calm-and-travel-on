import React from 'react';
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
          className='card'
          style={{
            // backgroundImage: `url(${props.item.image_url})`,
            // backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            userSelect: "none",
            backgroundColor: snapshot.isDragging
              ? "#263B4A"
              : "#456C86",
            ...provided.draggableProps.style
          }}
        >
          <div className='item-info'>
            {/* <img className='item-photo' src={`${props.item.image_url}`} alt="activty"/>  */}
            <span 
              className='item-name' 
              onMouseOver={()=> {
                if (props.droppableId !== 'list' ) {
                  console.log(props.item.id)
                  props.setHoverActivity(true)
                }
                else {
                  return null;
                }
              }}
              onMouseLeave={()=> {
                if (props.droppableId !== 'list' ) {
                  console.log(props.item.id)
                  props.setHoverActivity(false)
                }
                else {
                  return null;
                }
              }}
              >
              {props.item.name}
            </span>  
            <div>
              <span className='item-price'>${props.item.price_cents/100}</span> 

              {props.droppableId ==='list'?"": <button className='item-delete btn btn-danger' onClick={()=> deleteCard(props.index, props.droppableId, props.columns, props.setColumns)}><i className="material-icons">
              close
              </i></button>} 
            </div>

          </div>
         

       
        </div>
      );
    }}
    </Draggable>
  );
};

export default Card;