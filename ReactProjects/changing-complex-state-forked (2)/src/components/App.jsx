import React, { useState } from "react";

function App() {
  const [buttonClicked, setClicked] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  const [tempFullName, setTempFullName] = useState({
    tempFName: "",
    tempLName: "",
  });

  function iGotClicked() {
    setClicked(true);
    setFullName({
      fName: "",
      lName: ""
    });
    setClicked(false);
  }

  function fNameChanged(event) {
    setTempFullName(
      event.target.name === "fName"?
        {tempFName:event.target.value}
      : {tempLName:event.target.value});
    console.log(tempFName);
  }

  function lNameChanged(event) {
    tempLName(event.target.value);
    console.log();
  }

  event.preventDefault();
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input onChange={fNameChanged} name="fName" placeholder="First Name" />
        <input onChange={lNameChanged} name="lName" placeholder="Last Name" />
        <button onClick={iGotClicked}>Submit</button>
      </form>
    </div>
  );
}

export default App;
