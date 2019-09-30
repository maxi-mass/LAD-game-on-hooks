import React from "react";
import {Redirect} from "react-router-dom";

const GameOver = (props) => {
    if (!props.location.state) {
        return <Redirect to={"/"} />
    }
    return (
        <div>
            <h1>Game Over</h1>
            <div>Победитель: <span></span></div>
        </div>
    )
};

export default GameOver;