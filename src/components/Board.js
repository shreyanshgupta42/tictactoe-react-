import React, { useState } from 'react';               // this useState is the react states
import Square from './Square';

const Board = () => {
  const [board, setboard] = useState(Array(9).fill(null)); //  we have here two values because useState returns two values , board is the current position and set board is going to be the next position
  const [isXNext, setisXNext] = useState(false);

  const handleSquareClick = (position) => {
    if(board[position]){
      return;
    }
    setboard( prev =>{
      return prev.map((square,pos) => {
        if(pos===position){
          return isXNext ? 'X' : 'O';
        }
        return square;
      })
      
    })
    setisXNext((prev)=> !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}             // this onClick is reacts events
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}                                      
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
