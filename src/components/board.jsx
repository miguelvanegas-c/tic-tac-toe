import { useState } from "react";
import Square from "./square";
import GameInfo from "./GameInfo";
import calculateWinner from "../calculateWinner"

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [movements, setMovements] = useState([]);
  const [winner, setWinner] = useState(null);
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
    return;
    }
    const newSquares = squares.slice();
    if(xIsNext){
        newSquares[i] = "X";
    } else {
        newSquares[i] = "O";
    }
    registryMove(i,xIsNext? "X" : "O");
    setSquares(newSquares);
    setXIsNext(!xIsNext);  
    setWinner(calculateWinner(newSquares));
  }
    
  const registryMove = (i, player) => {
    const newMovements = movements.slice();
    newMovements.push(`Jugador ${player} en posicion ${i}`);
    setMovements(newMovements);
  }
  
  return (
    <>
      {winner? <h2>El ganador es: {winner}</h2> : <h2>Siguiente jugador: {xIsNext ? "X" : "O"}</h2>}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick ={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div >   
        <GameInfo movements={movements} />
      </div>
    </>
  );
}
