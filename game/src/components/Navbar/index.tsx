import React from "react";
import "./style.css";

interface Props {

    score: number;
    topScore: number;
}

function Navbar(props: Props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
                Trilogy Clicker
            </div>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <div className="nav-item">Score : {props.score}</div>
                    <div className="nav-item">Top Score : {props.topScore}</div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
