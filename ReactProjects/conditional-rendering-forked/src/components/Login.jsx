import React from "react";
import Input from "./Input";

export default () => (
  <div className="container">
    <h1>Hello</h1>
    <form className="form">
      <Input placeholder="UserName" type="text" />
      <Input placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  </div>
);
