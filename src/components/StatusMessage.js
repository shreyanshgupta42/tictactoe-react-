import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const nomovesleft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !nomovesleft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && nomovesleft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
