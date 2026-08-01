import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [shownContact, setShownContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function userInputted(event) {
    const name = event.target.name;
    const value = event.target.value;

    setContact((prevValue) => {
      if (name === "fName")
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      else {if (name === "lName") 
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };

      } else if (name === "Email") 
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
    });
  }

  function buttonGotClicked(event) {
    setShownContact({ fName: contact.fName, lName: contact.lName, email:contact.email });
    event.preventDefault();
  }

    return (
      <div onClick={buttonGotClicked} className="container">
        <h1>
          Hello {shownContact.fName} {shownContact.lName}
        </h1>
        <p>{shownContact.email}</p>
        <form>
          <input
            onChange={userInputted}
            name="fName"
            placeholder="First Name"
          />
          <input onChange={userInputted} name="lName" placeholder="Last Name" />
          <input name="email" placeholder="Email" />
          <button>Submit</button>
        </form>
      </div>
    );
}


export default App;
