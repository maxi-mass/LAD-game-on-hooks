import React from "react";
import {Link, Redirect} from "react-router-dom";
import styles from "./GameOver.module.css";

const GameOver = (props) => {
    if (!props.location.state) {
        return <Redirect to={"/"} />
    }
    return (
        <div className={styles.gameOver}>
            <h1>Game Over</h1>
            <div className={styles.message}>{props.location.state.message}</div>

            <div className="button">
                <Link className="link" to="/">Новая игра</Link>
            </div>
        </div>
    )
};

export default GameOver;