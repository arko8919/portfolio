import React from "react";

export const PopupWindow = (props) => {
  return (
      <p className="popupWindow" style={props.display} onClick={props.onClick}>
          {props.children}
      </p>
  )
};