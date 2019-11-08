import React, { FunctionComponent } from "react";
import "./style.css";

const Wrapper: FunctionComponent = (props) => {
  return <div className="container">{props.children}</div>;
}

export default Wrapper;