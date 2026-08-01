import React from "react";

export default (props) => (
  <form className="form">
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    {!props.isRegistered && (
      <input type="password" placeholder="Confirm Password" />
    )}
    <button type="submit">{!props.isRegistered ? "Register" : "Submit"}</button>
  </form>
);
