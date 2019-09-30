import React, { useState, useEffect } from 'react';
import '../../App.css';
import Table from "./Table/Table";
import {Redirect} from "react-router-dom";
import * as axios from "axios";

const Game = (props) => {

    const[currentPlayer, setCurrentPlayer] = useState(null);
    const[board, setBoard] = useState([]);
    const[message, setMessage] = useState('');
    const[isGameOver, setIsGameOver] = useState(false);

    // Начало новой игры
    const initGame = () => {
        axios.get('http://localhost:4000/data').then(response => {
            let serverState = response.data;

            setBoard(serverState.board);
            setCurrentPlayer(serverState.currentPlayer);
            setMessage(serverState.message);       
            setIsGameOver(serverState.isGameOver);     
        });
    };

    const play = (c) => {
            if (isGameOver) { return }
            
            axios.post('http://localhost:4000/play', {columnIndex: c, currentPlayer}).then(response => { 
                let serverState = response.data;
    
                setBoard(serverState.board);
                setCurrentPlayer(serverState.currentPlayer);
                setMessage(serverState.message);
                setIsGameOver(serverState.isGameOver);     
            });
        
    };

    useEffect(() => {
        initGame();
    }, []);

    if (!props.location.state) {
        return <Redirect to={"/"} />
    }

    return <Table
        board={board}
        message={message}
        initGame={initGame}
        play={play}
    />
};

export default Game;
