import React from "react";
import "./SongCard.css";
import essence from "./images/essence.png";
import passionfruit from "./images/passionfruit.png";

export default function SongCard(props) {
  function imagePicker() {
    if (props.title === "essence") {
      return <img className="img" src={essence} alt="" />;
    }
    return <img className="img" src={passionfruit} alt="" />;
  }
  return (
    <div className="card">
      {imagePicker()}

      <p className="genre">{props.genre}</p>
      <p className="title">{props.title}</p>
      <p className="artist">{props.artist}</p>
    </div>
  );
}
