import React from "react";
import "./SongDetails.css"
import sound from "../../images/sound-waves.png";
import lit from "../../images/litbonus.png";
import queue from "../../images/playlist.png";
import essence from "../../images/essence.png";
import passionfruit from "../../images/passionfruit.png";

export default function SongDetails(){
    return (<div className="playing-song">
    <div className="top">
      <img src={sound} alt="" />
      <p>Now Playing</p>
    </div>
    <div className="img-holder">
      <img src={lit} width="90%" style={{ borderRadius: "5%" }} alt="" />
    </div>
    <div className="song-details">
      <div>
        <p className="song-name">Lit - Bonus</p>
        <p className="song-artist">Bas, J.Cole, KQuick</p>
      </div>
      <div>
        <img src={queue} alt="" />
      </div>
    </div>
    <div className="queue-list" style={{ overflow: "auto" }}>
      <div>
        <img
          src={essence}
          alt=""
        />
        <div>
          <p className="queue-song">Essence</p>
          <p className="queue-artist">Wizkid</p>
        </div>
        <p className="time">4:08</p>
      </div>
      <div>
        <img
          src={passionfruit}
          alt=""
        />
        <div>
          <p className="queue-song">Passionfruit</p>
          <p className="queue-artist">Drake</p>
        </div>
        <p className="time">3:32</p>
      </div>
    </div>
  </div>)
}