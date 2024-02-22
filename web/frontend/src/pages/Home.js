import React from "react";
import "./Home.css";
import Nav from "../components/post_login/Nav";
import SongDetails from "../components/post_login/SongDetails";

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
      <SongDetails />
    </div>
  );
}
