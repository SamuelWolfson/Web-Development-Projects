import React from "react";
import ReactDOM from "react-dom";

var comment = "Morning";
var headingColor = "red";
var date = new Date();
var currentHour = date.getHours();

if (currentHour > 12) {
  comment = "Afternoon";
  headingColor = "green";
}
if (currentHour > 18) {
  comment = "Evening";
  headingColor = "blue";
}

console.log(headingColor);

ReactDOM.render(
  <div>
    <h1 class="heading" style={{ color: headingColor }}>
      Good {comment}
    </h1>
  </div>,
  document.getElementById("root")
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
