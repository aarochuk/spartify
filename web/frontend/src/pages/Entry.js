import React from "react";
import "./Entry.css";
import Header from "../components/Header";
import SongCard from "../components/SongCard";
import play from "../images/play-store.png";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="bodyHolder">
      <Header color="#FBFADA" />
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
      <Footer color="#FBFADA" />
    </div>
  );
}
