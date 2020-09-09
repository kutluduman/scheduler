import React from "react";
import classnames from "classnames";

import "components/Button.scss";

export default function Button(props) {
  
  // the class is built according to the props that are passed in 
  const buttonClass = classnames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
