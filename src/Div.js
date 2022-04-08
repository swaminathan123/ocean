import React from "react";
import "./web.css";
const Div = (props) => {
  return (
    <div className="a p-5">
      <h1>{props.head}</h1>
      <p>{props.des}</p>
    </div>
  );
};

export default Div;
