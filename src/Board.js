import React, { useState } from "react";
import Tile from "./Tile";
import "./Board.css";

function Board() {
  const _symbols = [
    "heart",
    "heart",
    "spade",
    "spade",
    "club",
    "club",
    "diamond",
    "diamond",
    "apple",
    "apple",
    "mango",
    "mango",
    "banana",
    "banana",
    "orange",
    "orange",
  ];
  const makeBoard = () => {
    let board = new Array(16);
    let randomSymbols = _symbols.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return randomSymbols.map((x, i) => ({
      id: i,
      value: x,
      exposed: false,
      active: true,
    }));
  };
  const [board, setBoard] = useState(makeBoard);
  const [score, setScore] = useState(0);

  return (
    <div className="Board">
      {board.map((tile) => (
        <Tile key={tile.id} />
      ))}
    </div>
  );
}

export default Board;
