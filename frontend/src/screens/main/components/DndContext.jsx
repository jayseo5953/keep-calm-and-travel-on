import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import CardList from './CardList'
import addCardList from '../helpers/addCardList'

function deleteList (columnId, columns, setColumns) {
  let newState = {...columns};
  delete newState[columnId];
  setColumns(newState)
}
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
            {columnId!=='list'? <button className='delete-list' onClick={()=>deleteList(columnId, props.columns, props.setColumns)}>delete</button>:""}
          </div>
        );
      })}
      <button className='add-list' onClick={(()=>{addCardList(props.columns, props.setColumns)})} >+</button>
   </DragDropContext>
  );
};

export default DndContext;