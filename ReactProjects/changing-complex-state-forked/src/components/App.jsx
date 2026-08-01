import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  const [shownFullName, setShownFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function userTypedIn(event) {
    if ((event.target.name = "fName"))
      setFullName({ firstName: event.target.value });
    setFullName({ lastName: event.target.value });
  }

  function buttonGotClicked(event) {
    setShownFullName("sam");
    console.log(shownFullName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {shownFullName.firstName} {shownFullName.lastName}
      </h1>
      <form>
        <input onChange={userTypedIn} name="fName" placeholder="First Name" />
        <input onChange={userTypedIn} name="lName" placeholder="Last Name" />
        <button onClick={buttonGotClicked}>Submit</button>
      </form>
    </div>
  );
}

export default App;
