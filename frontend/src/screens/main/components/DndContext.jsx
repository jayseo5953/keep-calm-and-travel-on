import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import CardList from './CardList'
import addCardList from '../helpers/addCardList'
import deleteList from '../helpers/deleteList'

const DndContext = (props) => {

  return (
    <DragDropContext
      onDragEnd={props.onDragEnd}>

      <div className='days-container'>
      {Object.entries(props.columns).map(([columnId, column]) => {
        if(columnId !== 'list'){
          return (
            <div
            className='column-container'
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div className='outside-column'>
                <CardList 
                droppableId={columnId} 
                key={columnId}
                columnId={columnId}
                column={column}
                columns={props.columns}
                setColumns={props.setColumns}
                totalCost={props.totalCost}
                // setTotalCost={props.setTotalCost}
                budget={props.budget}
                />
              </div>
              {columnId!=='list' && column.name!=='Day 1'? <button className='delete-list' onClick={()=>deleteList(columnId, props.columns, props.setColumns)}>X</button>:""}
            </div>
          );
        }
        return
      })}
          <button className='add-list' onClick={(()=>{addCardList(props.columns, props.setColumns)
      })} >+</button>
      </div>
        <div
        className='column-container activity-list'
        >
          {/* <h2>{props.columns['list'].name}</h2> */}
          <div className='outside-column'>
            <CardList 
            droppableId='list'
            columnId={'list'}
            column={props.columns['list']}
            columns={props.columns}
            setColumns={props.setColumns}
            totalCost={props.totalCost}
            // setTotalCost={props.setTotalCost}
            budget={props.budget}
            />
          </div>
        </div>

   </DragDropContext>
  );
};

export default DndContext;