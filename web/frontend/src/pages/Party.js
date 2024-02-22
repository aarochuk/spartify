import React from "react";
import "./Party.css";
import Nav from "../components/post_login/Nav";
import SongDetails from "../components/post_login/SongDetails";

export default function Party() {
  return (
    <div className="main">
      <Nav active="party" />
      <div className="main-content">
        <div>
          <p>Join Party</p>
        </div>
        <div>
          <p>Create Party</p>
        </div>
        <div>
          <p>Recent Parties</p>
        </div>
        <div>
          <p>View Friends In Parties</p>
        </div>
      </div>
      <SongDetails />
    </div>
  );
}
