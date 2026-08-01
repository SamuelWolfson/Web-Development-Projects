import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState([]);

  function userInputted(event) {
    setInputText(event.target.value);
  }

  function iGotClicked(event) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    event.preventDefault();
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          value={inputText}
          onChange={userInputted}
          name="hello"
          placeholder="item name"
          type="text"
        />
        <button onClick={iGotClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
