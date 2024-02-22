import React, { useState } from "react";

import "./Nav.css";
import home from "../../images/nav-buttons/home.png";
import home_active from "../../images/nav-buttons/home-active.png";
import party from "../../images/nav-buttons/party.png";
import party_active from "../../images/nav-buttons/party-active.png";
import music from "../../images/nav-buttons/music.png";
import music_active from "../../images/nav-buttons/music-active.png";
import temp_img from "../../images/temp-img.png";
import github from "../../images/github.png";
import github_active from "../../images/github-active.png";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [gh, setGh] = useState(github);

  var home_img = home;
  var party_img = party;
  var music_img = music;

  if (props.active === "home") {
    home_img = home_active;
    party_img = party;
    music_img = music;
  } else if (props.active === "party") {
    home_img = home;
    party_img = party_active;
    music_img = music;
  } else {
    home_img = home;
    party_img = party;
    music_img = music_active;
  }
  return (
    <div className="nav-bar">
      <div className="user-img">
        <img src={temp_img} alt="" width="50%" />
      </div>
      <div className="nav-buttons">
        <button className={props.active === "home" ? "active" : ""}>
          <Link to="/home">
            <img src={home_img} alt="" />
          </Link>
        </button>
        <button className={props.active === "party" ? "active" : ""}>
          <Link to="/party">
            <img src={party_img} alt="" />
          </Link>
        </button>
        <button className={props.active === "mymusic" ? "active" : ""}>
          <Link to="/mymusic">
            <img src={music_img} alt="" />
          </Link>
        </button>
      </div>
      <div className="github-holder">
        <a
          href="https://github.com/aarochuk"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setGh(github_active)}
          onMouseLeave={() => setGh(github)}
        >
          <img src={gh} />
        </a>
      </div>
    </div>
  );
}
