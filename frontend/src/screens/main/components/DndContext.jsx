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
              <div className='column-name-container'>
                <h3 className='column-name' >{column.name}</h3>
                {columnId!=='list' && column.name!=='Day 1'? 
                <button onClick={()=>deleteList(columnId, props.columns, props.setColumns)} type="button" className="delete-list btn btn-danger"><i className="material-icons">
                delete
                </i></button>:""}
              </div>
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
                setHoverActivity={props.setHoverActivity}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className='add-list-container'>
        <button type="button" className="btn btn-primary add-list" onClick={(()=>{
        addCardList(props.columns, props.setColumns)
        })} ><i className="material-icons"> add</i>
        </button>
      </div>
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
            setHoverActivity={props.setHoverActivity}
            />
          </div>
    
        </div>

       

   </DragDropContext>
  );
};

export default DndContext;
