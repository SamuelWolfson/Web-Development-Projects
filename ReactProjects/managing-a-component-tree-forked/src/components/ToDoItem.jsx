import React from "react";

function toDoItem(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.itemText}</li>
    </div>
  );
}

export default toDoItem;
