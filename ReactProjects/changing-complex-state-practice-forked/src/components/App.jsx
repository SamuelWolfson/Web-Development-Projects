import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function userInputted(event) {}
  const { name, value } = event.target;
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={userInputted} name="fName" placeholder="First Name" />
        <input onChange={userInputted} name="lName" placeholder="Last Name" />
        <input onChange={userInputted} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
