import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import './styles/root.scss';

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null)); //  we have here two values because useState returns two values , board is the current position and set board is going to be the next position
  const [isXNext, setisXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setboard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setisXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h1>{message}</h1>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
