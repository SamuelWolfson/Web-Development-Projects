import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [shownContact, setShownContact] = useState({
    ...contact,
  });

  function userInputted(event) {
    const name = event.target.name;
    const value = event.target.value;

    setContact((prevValue) => ({ ...prevValue, [name]: [value] }));
  }

  function buttonGotClicked(event) {
    setShownContact({
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email,
    });
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {shownContact.fName} {shownContact.lName}
      </h1>
      <p>{shownContact.email}</p>
      <form>
        <input
          onChange={userInputted}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={userInputted}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={userInputted}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button onClick={buttonGotClicked}>Submit</button>
      </form>
    </div>
  );
}

export default App;
