import React from "react";
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

export default function Nav() {
  return (
    <div className="nav-bar">
      <div className="user-img"><img src={temp_img} alt="" width="50%"/></div>
      <div className="nav-buttons">
        <button className="active"><img src={home_active} alt=""/></button>
        <button><img src={party} alt=""/></button>
        <button><img src={music} alt=""/></button>
      </div>
      <div className="github-holder">
        <img src={github}/>
      </div>
    </div>
  );
}
