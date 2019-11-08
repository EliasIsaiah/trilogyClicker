import React from "react";
import "./style.css";

interface Props {

    score: number;
    topScore: number;
}

function Navbar(props: Props) {
    return (

        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                Bootstrap
            </a>
            <ul className="navbar-nav">
                <li>Score:{props.score}</li>
                <li>Top Score:{props.topScore}</li>
            </ul>
        </nav >
    );
}

export default Navbar;
