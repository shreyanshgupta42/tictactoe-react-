import React from 'react';

const Square = ({ value, onClick, iswinningSquares }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinningSquares ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
