import React, { useState } from "react";
import { data } from "../utils/data";

const Board = ({ tasks, handleDelete, handleMove }) => {
  const pendingTasks = tasks.filter((item) => item.category === "pending");
  const onGoingTasks = tasks.filter((item) => item.category === "ongoing");
  const comletedTasks = tasks.filter((item) => item.category === "completed" );

  
  return (
    <div id="taskBoard">
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Pending</h3>
        </div>
        <div className="taskItems">
          {pendingTasks.map((pitem, index) => (
            <div className="taskItem" key={index}>
              <p>{pitem.task}</p>
              <button
                onClick={() => handleMove(pitem)}
                className="taskButton move"
              >
                Move
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Ongoing</h3>
        </div>
        <div className="taskItems">
          {onGoingTasks.map((oItem, index) => (
            <div className="taskItem" key={index}>
              <p>{oItem.task}</p>
              <button
                onClick={() => handleMove(oItem)}
                className="taskButton move"
              >
                Move
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="taskColumn">
        <div className="columnHeader">
          <h3>Completed</h3>
        </div>
        <div className="taskItems">
          {comletedTasks.map((cItem, index) => (
            <div className="taskItem" key={index}>
              <p>{cItem.task}</p>
              <button
                className="taskButton delete"
                onClick={() => handleDelete(cItem)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    //Board
  );
};
export default Board;
