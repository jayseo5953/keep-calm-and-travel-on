import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'


const CardList = (props) => {
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