import React from 'react';

const History = ({ history, moveTo, currentmove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <div>
              <li key={move}>
                <button
                  className={`btn-move ${currentmove===move ? 'active' : ''}`}     // alternative to the below inline styling we use dynamic styling using backtics class assigning
                  // style={{ fontWeight: move === currentmove ? 'bold' : 'normal' }} // this is a inline style tag but inside it we are using javascript code, same css property's camel case is used as fontWeight
                  type="button"
                  onClick={() => {
                    moveTo(move);
                  }}
                >
                  {move === 0 ? 'Go to game start' : `Go to move #${move}`}
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
