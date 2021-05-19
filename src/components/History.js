import React from 'react';

const History = ({ history, moveTo, currentmove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{ fontWeight: move === currentmove ? 'bold' : 'normal' }}                 // this is a inline style tag but inside it we are using javascript code, same css property's camel case is used as fontWeight
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to game start' : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
