import React from "react";
import { Draggable } from "react-beautiful-dnd";
import deleteCard from "../helpers/deleteCard";

const Card = props => {
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
            className="card shadow"
            style={{
              backgroundSize: "contain",
              userSelect: "none",
              backgroundColor: snapshot.isDragging
              ? "rgb(38, 59, 74)"
              : "rgb(69, 95, 124)",
                // ? "rgba(50, 50, 54, 1)"
                // : "rgba(50, 50, 50, .9)",
              ...provided.draggableProps.style
            }}
          >
            <div
              className="item-info"
              onMouseOver={() => {
                if (props.droppableId !== "list") {
                  props.setHoverActivity(props.item.id);
                } else {
                  return null;
                }
              }}
              onMouseLeave={() => {
                if (props.droppableId !== "list") {
                  props.setHoverActivity(null);
                } else {
                  return null;
                }
              }}
            >
              {/* <div className='drag' >
                <i className="material-icons">
                dehaze</i>
              </div> */}
              <div className="item-cont">
              
                                <img
                  className="item-photo"
                  src={`${props.item.image_url}`}
                  alt="activty"
                />
                <strong className="item-name">{props.item.name}</strong>
              </div>
              <div className="item-cont2">
                <span className="item-time">{props.item.time_operation} </span>
                <strong className="item-price">
                  ${props.item.price_cents / 100}
                </strong>
                {props.droppableId === "list" ? (
                  ""
                ) : (
                  <button
                    className="item-delete btn btn-danger"
                    onClick={() =>
                      deleteCard(
                        props.index,
                        props.droppableId,
                        props.columns,
                        props.setColumns
                      )
                    }
                  >
                    <i className="material-icons">close</i>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};
export default Card;
