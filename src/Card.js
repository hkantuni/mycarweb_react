import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export function Card(props) {
  return (
    <div className="card" style={{ flex: "0 0 340px" }}>
      <Zoom>
        <img className="card-img-top" src={props.url} alt="Card cap" />
      </Zoom>
      <div className="card-body">
        <h3 className="card-title">{props.make}</h3>
        <p className="card-text">{props.model}</p>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
