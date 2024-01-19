import React, { useState } from "react";
import Tile from "./Tile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Board.css";

function Board() {
  const _symbols = [
    "🀥",
    "🀥",
    "🀤",
    "🀤",
    "🀣",
    "🀣",
    "🀢",
    "🀢",
    "🀀",
    "🀀",
    "🀁",
    "🀁",
    "🀂",
    "🀂",
    "🀃",
    "🀃",
  ];

  const makeBoard = () => {
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

  const flipTile = (tileId) => {
    let b = [...board];
    let tile = { ...board[tileId], exposed: true };
    b[tileId] = tile;
    setBoard(b);
    setTimeout(() => {
      const exposedTiles = b.filter((tile) => tile.exposed);
      if (exposedTiles.length === 2) {
        if (exposedTiles[0].value === exposedTiles[1].value) {
          setScore(score + 1);
          toast.success(`Match! Your score is ${score + 1}`);
          let b2 = [...board];
          let t1 = {
            ...board[exposedTiles[0].id],
            active: false,
            exposed: false,
          };
          let t2 = {
            ...board[exposedTiles[1].id],
            active: false,
            exposed: false,
          };
          b2[exposedTiles[0].id] = t1;
          b2[exposedTiles[1].id] = t2;
          setBoard(b2);
        } else {
          toast.error("FAIL!");
          let b2 = [...board];
          let t1 = {
            ...board[exposedTiles[0].id],
            active: true,
            exposed: false,
          };
          let t2 = {
            ...board[exposedTiles[1].id],
            active: true,
            exposed: false,
          };
          b2[exposedTiles[0].id] = t1;
          b2[exposedTiles[1].id] = t2;
          setBoard(b2);
        }
      }
    }, 2000);
  };

  return (
    <div className="Board">
      {board.map((tile) => (
        <Tile
          key={tile.id}
          id={tile.id}
          value={tile.value}
          exposed={tile.exposed}
          active={tile.active}
          flipTile={flipTile}
        />
      ))}
      <ToastContainer
        position="bottom-left"
        autoClose={2400}
        newestOnTop={false}
        closeOnClick={true}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Board;
