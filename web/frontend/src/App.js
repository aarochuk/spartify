import React from "react";
import "./App.css";
import SongCard from "./SongCard";
import play from "./images/play-store.png";

export default function App() {
  return (
    <div className="bodyHolder">
      <div className="header">
        <div className="header-text">
          <h1>spartify</h1>
          <p>party democracy</p>
        </div>
        <div className="header-button">
          <button>Sign Up</button>
          <button>Log in</button>
        </div>
      </div>
      <div className="info">
        <div className="info-text">
          <h1>Democratising Party Music</h1>
          <p>
            Let party attendees vote for the songs they want to hear in the
            party. Make playlists with friends and save music on local device
            all with spartify.
          </p>
          <button className="get-started">Get Started</button>
          <p>Download on</p>
          <button className="google-play">
            <img src={play} alt="" />
            <p>Google Play</p>
          </button>
        </div>
        <div className="info-songs">
          <SongCard title="essence" artist="Wizkid" genre="Afrobeat" />
          <SongCard title="passionfruit" artist="Drake" genre="Hip-Hop" />
        </div>
      </div>
      <div className="footer">
        <p>
          &copy; Made by{" "}
          <a
            href="https://andrewarochukwu.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            andrew a.
          </a>{" "}
          2024
        </p>
      </div>
    </div>
  );
}
