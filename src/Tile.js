import React from "react";
import "./Tile.css";

function Tile(props) {
  return (
    <div
      className={
        !props.active
          ? "Tile-dead"
          : props.exposed
          ? "Tile-exposed"
          : "Tile-hidden"
      }
    >
      {!props.active ? "DEAD" : props.exposed ? props.value : ""}
    </div>
  );
}

export default Tile;
