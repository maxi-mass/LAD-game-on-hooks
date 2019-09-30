import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column/Column';
import {Link} from "react-router-dom";

const Table = ({board, message, initGame, play}) => {
    return (
        <div>
            <p className="message">{message}</p>
            <div className="button" onClick={() => {initGame()}}>Начать новую</div>
            <div className="button">
                <Link to={{
                    pathname: "/game-over",
                    state: {
                        isGameOver: true
                    }
                }}>Закончить игру</Link>
            </div>
            <table>
                <thead>
                </thead>
                <tbody>
                {board.map((column, i) => (<Column key={i} column={column} play={play} />))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    board: PropTypes.array,
    message: PropTypes.string,
    initGame: PropTypes.func,
    play: PropTypes.func
};

export default Table;