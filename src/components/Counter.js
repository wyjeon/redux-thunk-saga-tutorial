import React from 'react';

function Counter({ number, onIncrese, onDecrese }) {
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrese}>+1</button>
      <button onClick={onDecrese}>-1</button>
    </div>
  );
}

export default Counter;
