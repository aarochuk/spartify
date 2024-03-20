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
      <div className="main-content">
        <p>Party Name #party code</p>
        <form>
          <input type="text" placeholder="enter party code" />
        </form>
        <p>Your queue is empty search songs to add them</p>
      </div>
      <SongDetails />
    </div>
  );
}
