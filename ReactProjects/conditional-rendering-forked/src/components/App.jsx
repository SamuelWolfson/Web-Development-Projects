import React from "react";
import Login from "./Login";
var isLoggedIn = false;

export default () =>
  isLoggedIn ? (
    <div className="container">
      <h1>Hello User</h1>
    </div>
  ) : (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
