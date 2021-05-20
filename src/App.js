import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';
import './styles/root.scss';

const App = () => {
  // const [board, setboard] = useState(Array(9).fill(null)); //  we have here two values because useState returns two values , board is the current position and set board is going to be the next position
  // const [isXNext, setisXNext] = useState(false);

  const newGameState = [{ board: Array(9).fill(null), isXNext: true }];

  const [history, setHistory] = useState(newGameState);
  const [currentmove, setCurrentMove] = useState(0);
  const current = history[currentmove];

  const {winner, winningSquares} = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newboard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newboard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const newGame = () => {
    setHistory(newGameState);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button type="button" onClick={newGame}>
        newGame
      </button>
      <History history={history} moveTo={moveTo} currentmove={currentmove} />
    </div>
  );
};

export default App;
