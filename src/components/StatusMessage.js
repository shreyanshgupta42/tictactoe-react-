import React from 'react';

const StatusMessage = ({ winner, current }) => {
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const nomovesleft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        //   we are using react fragment here because JSX returns always single element
        <>
          Winner is 
          {/* below is dynamic class under some conditions */}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !nomovesleft && (
        <>
          Next player is
          {' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
            {' '}
          </span>
        </>
      )}
      {!winner && nomovesleft && (
        <>
          <span className="text-green">X</span>
          and
          {' '}
          <span className="text-orange">O</span> 
          tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
