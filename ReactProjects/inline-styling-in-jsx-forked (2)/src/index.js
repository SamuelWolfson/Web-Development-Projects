import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  display: "flex",
  color: "green",
  backgroundColor: "blue",
  border: "4px solid yellow",
  justifyContent: "center",
};

customStyle.color = "white";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
