import React from "react";
import Input from "./Input";

export default (props) =>
  !props.userIsRegistered ? (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  ) : (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Sumbit</button>
    </form>
  );
