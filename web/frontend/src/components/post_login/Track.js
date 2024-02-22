import React from "react";
import "./Track.css";

export default function Track(props) {
  return (
    <div className="track">
      <div className="dets">
        <img src={props.img} className="wrong-size" alt="" />

        <div>
          <p className="track-title">{props.title}</p>
          <p className="track-artist">
            {props.artist} &middot; {props.album}
          </p>
        </div>
      </div>
      <p className="track-time">{props.time}</p>
    </div>
  );
}
