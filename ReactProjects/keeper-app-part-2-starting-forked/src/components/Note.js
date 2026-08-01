import React from "react";

export default (props) => (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.body}</p>
  </div>
);
