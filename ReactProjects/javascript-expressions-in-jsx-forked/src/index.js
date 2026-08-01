import React from "react";
import ReactDOM from "react-dom";

const luckyNum = 8;
const fName = "Samuel";
const lName = "Wolfson";
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <h2>
      HI, My firstname is {fName} and my last name is {lName}
    </h2>
  </div>,
  document.getElementById("root")
);
