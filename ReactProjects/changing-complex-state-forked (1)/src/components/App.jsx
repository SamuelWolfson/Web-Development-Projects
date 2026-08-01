import React, { useState } from "react";

function App() {
  const [fullName, setFulName] = useState({
    firstName: "",
    lastName: "",
  });

  function updateName(event) {
    var inputtedFOrLN =;
    setFulName({
      event.target.name === "fName"?firstName:lastName : event.target.value,
    });
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <form>
        <input onChange={updateName} name="fName" placeholder="First Name" />
        <input onChange={updateName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
