import React from "react";
import "../../public/styles.css";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img_type="circle-img" img={props.img} altToImg="Avatar-img" />
      </div>
      <div className="bottom">
        <Detail text={props.tel} />
        <Detail text={props.email} />
      </div>
    </div>
  );
}

export default Card;
