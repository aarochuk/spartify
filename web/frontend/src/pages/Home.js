import React from "react";
import "./Home.css";
import Nav from "../components/post_login/Nav";

export default function Home() {
  return (
    <div className="main">
      <Nav/>
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
        <p>Now Playing</p>
        <img />
        <p>name</p>
        <p>artist</p>
        <div>progress bar</div>
        <div>
          <img />
          <img />
          <img />
        </div>
        <div>
          <p>Queue</p>
          <div>song</div>
          <div>song</div>
          <div>song</div>
        </div>
      </div>
    </div>
  );
}
