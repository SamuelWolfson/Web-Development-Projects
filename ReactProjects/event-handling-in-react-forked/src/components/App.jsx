import React, { useState } from "react";

function App() {
  const [isMouseOverButton, SetisMouseOverButton] = useState(false);
  const [isMButtonClicked, SetisMButtonClicked] = useState(false);
  var typedInPhrase = "";

  function typed(event) {
    typedInPhrase = event.target.value;
  }

  function iGotClicked() {
    SetisMButtonClicked(true);
  }

  function mouseOver() {
    SetisMouseOverButton(true);
  }

  function mouseOut() {
    SetisMouseOverButton(false);
  }
  return (
    <div className="container">
      <h1>{isMButtonClicked ? typedInPhrase : "Hello"}</h1>
      <input onChange={typed} type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOverButton ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={iGotClicked}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
