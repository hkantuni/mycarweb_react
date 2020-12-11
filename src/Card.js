import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ProgressiveImage from "react-progressive-image";

export function Card(props) {
  console.log(props.placeholder);
  return (
    <div className="card" style={{ flex: "0 0 340px" }}>
      <Zoom>
        <ProgressiveImage src={props.url} placeholder={props.placeholder}>
          {(src) => <img src={src} alt="Card cap" className="card-img-top" />}
        </ProgressiveImage>
      </Zoom>
      <div className="card-body">
        <h3 className="card-title">{props.make}</h3>
        <p className="card-text">{props.model}</p>
        <p className="card-text">Diecast brand: {props.description}</p>
      </div>
    </div>
  );
}
