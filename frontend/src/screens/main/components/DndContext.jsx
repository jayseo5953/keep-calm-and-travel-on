import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import CardList from './CardList'

const DndContext = (props) => {
  return (
    <DragDropContext
      onDragEnd={props.onDragEnd}>

      {Object.entries(props.columns).map(([columnId, column], index) => {
        return (
          <div
          className='container-2'
            key={columnId}
          >
            <h2>{column.name}</h2>
            <div className='container-3'>
              <CardList 
              droppableId={columnId} 
              key={columnId}
              columnId={columnId}
              column={column}
              columns={props.columns}
              setColumns={props.setColumns}
              />
            </div>
          </div>
        );
      })}
   </DragDropContext>
  );
};

export default DndContext;