import React, { FunctionComponent } from "react";
import "./style.css";

const Wrapper: FunctionComponent = (props) => {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;