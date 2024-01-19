import React from "react";
import "./Tile.css";

function Tile(props) {
  const handleClick = (e) => {
    props.flipTile(e.target.id);
  };

  return (
    <div
      className={
        !props.active
          ? "Tile-dead"
          : props.exposed
          ? "Tile-exposed"
          : "Tile-hidden"
      }
      onClick={handleClick}
      id={props.id}
    >
      {props.active && props.value}
    </div>
  );
}

export default Tile;
