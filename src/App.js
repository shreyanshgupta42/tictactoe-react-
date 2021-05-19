import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helper';
import './styles/root.scss';

const App = () => {
  // const [board, setboard] = useState(Array(9).fill(null)); //  we have here two values because useState returns two values , board is the current position and set board is going to be the next position
  // const [isXNext, setisXNext] = useState(false);

  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentmove,setCurrentMove]=useState(0);
  const current=history[currentmove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last=prev[prev.length-1];
      const newboard= last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({board: newboard,isXNext: !last.isXNext});
    });
    setCurrentMove(prev=> prev+1);
  };

  const moveTo=(move)=>{
    setCurrentMove(move);
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h1>{message}</h1>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentmove={currentmove} />
    </div>
  );
};

export default App;
