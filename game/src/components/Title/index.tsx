import React, { FunctionComponent } from "react";
import "./style.css";

const Title: FunctionComponent = (props) => {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
