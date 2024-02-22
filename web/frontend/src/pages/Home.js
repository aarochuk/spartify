import React from "react";
import "./Home.css";
import Nav from "../components/post_login/Nav";
import sound from "../images/sound-waves.png";
import lit from "../images/litbonus.png";
import queue from "../images/playlist.png";
import essence from "../images/essence.png";
import passionfruit from "../images/passionfruit.png";

export default function Home() {
  return (
    <div className="main">
      <Nav active="home" />
      <div className="main-content">
        <div className="main-top">
          <button>Search</button>
          <button>Settings</button>
          <button>Me</button>
        </div>
        <div className="fav-artists">
          <img />
          <img />
          <img />
          <img />
          <img />
        </div>
        <div className="rec-played">
          <div className="played-song">
            <img />
            <p>name</p>
            <p>artist</p>
            <p>length</p>
          </div>
          <div className="played-song">
            <img />
            <p>name</p>
            <p>artist</p>
            <p>length</p>
          </div>
          <div className="played-song">
            <img />
            <p>name</p>
            <p>artist</p>
            <p>length</p>
          </div>
        </div>
        <div className="rec-playlist">
          <img />
          <img />
          <img />
        </div>
      </div>
      <div className="playing-song">
        <div className="top">
          <img src={sound} alt="" />
          <p>Now Playing</p>
        </div>
        <div className="img-holder">
          <img src={lit} width="90%" style={{ borderRadius: "5%" }} alt="" />
        </div>
        <div className="song-details">
          <div>
            <p>Lit - Bonus</p>
            <p>Bas, J.Cole, KQuick</p>
          </div>
          <div>
            <img src={queue} alt="" />
          </div>
        </div>
        <div>progress bar</div>
        <div style={{ overflow: "auto" }}>
          <div>
            <img
              src={essence}
              width="15%"
              style={{ borderRadius: "10%" }}
              alt=""
            />
            <div>
              <p>Essence</p>
              <p>Wizkid</p>
            </div>
          </div>
          <div>
            <img
              src={passionfruit}
              width="15%"
              style={{ borderRadius: "10%" }}
              alt=""
            />
            <div>
              <p>Passionfruit</p>
              <p>Drake</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
