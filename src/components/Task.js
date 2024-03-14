import React from "react";

function Task({ text, category, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={onDeleteTask} value={text} className="delete">X</button>
    </div>
  );
}

export default Task;
