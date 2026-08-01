import React from "react";
import "../../public/styles.css";

function Avatar(props) {
  return (
    <img className={props.img_type} src={props.img} alt={props.altToImg} />
  );
}

export default Avatar;
