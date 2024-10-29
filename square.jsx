export default Board;

Square.jsx
import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
