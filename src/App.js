import React, { useState, useEffect } from 'react';
import './App.css';
import Table from "./components/Table/Table";

const App = (props) => {

  const player1 = 1;
  const player2 = 2;
  const[currentPlayer, setCurrentPlayer] = useState(null);
  const[board, setBoard] = useState([]);
  const[gameOver, setGameOver] = useState(false);
  const[message, setMessage] = useState('');

  // Начало новой игры
  const initGame = () => {
    // Создаем пустое игровое поле, представляющее собой 7 столбцов в 6 клеток высотой
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null)
      }
      // setBoard(board.push(row));
      board.push(row);
    }

    setBoard(board);
    setCurrentPlayer(player1);
    setGameOver(false);
    setMessage('');
  };

  const play = (c) => {
    if (!gameOver) {
      // Закрасить поле на доске после хода игрока
      let localBoard = board;
      for (let r = 5; r >= 0; r--) {
        if (!localBoard[r][c]) {
          localBoard[r][c] = currentPlayer;
          break;
        }
      }

      // Проверка статуса после хода игрока
      let result = checkAll(localBoard);
      if (result === player1) {
        setBoard(localBoard);
        setGameOver(true);
        setMessage('Игрок 1 (красные фишки) выиграл!');
      } else if (result === player2) {
        setBoard(localBoard);
        setGameOver(true);
        setMessage('Игрок 2 (желтые фишки) выиграл!' );
      } else if (result === 'draw') {
        setBoard(localBoard);
        setGameOver(true);
        setMessage('Ничья.');
      } else {
        setBoard(localBoard);
        (currentPlayer === player1) ? setCurrentPlayer(player2) : setCurrentPlayer(player1);
      }
    } else {
      setMessage('Game over. Начните новую игру.');
    }
  };

  const checkVertical = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkHorizontal = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] &&
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalRight = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalLeft = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDraw = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  };

  const checkAll = (board) => {
    return checkVertical(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkHorizontal(board) || checkDraw(board);
  };

  useEffect(() => {
    initGame();
  }, []);

  return <Table
      board={board}
      message={message}
      initGame={initGame}
      play={play}
  />
};

export default App;
