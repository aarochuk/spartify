import React from "react";
import "./CurrParty.css";
import Nav from "../components/post_login/Nav";
import SongDetails from "../components/post_login/SongDetails";
import essence from "../images/essence.png";
import passionfruit from "../images/passionfruit.png";

export default function CurrParty() {
  return (
    <div className="main">
      <Nav active="party" />
      <div className="main-content"></div>
        
      <SongDetails />
    </div>
  );
}
