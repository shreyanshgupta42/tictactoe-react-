import React from 'react';

const Square = ({ value, onClick, iswinningSquares }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${iswinningSquares ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
