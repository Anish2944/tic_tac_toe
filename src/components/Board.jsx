import React, { useState } from 'react'
import Square from './square'

function Board() {

  const [squares,setSquares] = useState(Array(9).fill(null));
  const [isXturn,setIsXturn] = useState(true);

  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else if(winner===false){
    status = "DRAW";
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } else{
    status = "Player " + (isXturn? "X" : "O") + "'s Turn";
  }

  function handleclick(i) {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const sq = squares.slice();
    if (isXturn) {
      sq[i] = "X";
    } else{
      sq[i] = "O";
    }
    setSquares(sq);
    setIsXturn(!isXturn);
  }
  return (
    <>
    <div className='grid grid-cols-3'>
        <div>
            <Square onSquareclick={() => handleclick(0)} value = {squares[0]} />
            <Square onSquareclick={() => handleclick(1)} value = {squares[1]} />
            <Square onSquareclick={() => handleclick(2)} value = {squares[2]} />
        </div>
        <div>
            <Square onSquareclick={() => handleclick(3)} value = {squares[3]} />
            <Square onSquareclick={() => handleclick(4)} value = {squares[4]} />
            <Square onSquareclick={() => handleclick(5)} value = {squares[5]} />
        </div>
        <div>
            <Square onSquareclick={() => handleclick(6)} value = {squares[6]} />
            <Square onSquareclick={() => handleclick(7)} value = {squares[7]} />
            <Square onSquareclick={() => handleclick(8)} value = {squares[8]} />
        </div>
    </div>
        <h2 className=''>{status}</h2>
    </>
  )
}

export default Board

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (!(squares.includes(null))) {
    return false;
  }
  return null;
}
