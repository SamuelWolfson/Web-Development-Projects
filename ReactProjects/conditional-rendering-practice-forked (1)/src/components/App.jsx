import React from "react";
import Form from "./Form";

var userIsRegistered = false;

export default () =>
  userIsRegistered ? (
    <div className="container">
      <Form userIsRegistered={userIsRegistered} />
    </div>
  ) : (
    <div className="container">
      <Form />
    </div>
  );
