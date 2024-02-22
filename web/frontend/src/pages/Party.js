import React from "react";
import "./Home.css";
import Nav from "../components/post_login/Nav";
import SongDetails from "../components/post_login/SongDetails";

export default function Home() {
  return (
    <div className="main">
      <Nav active="party" />
      <div className="main-content">
          
      </div>
      <SongDetails />
    </div>
  );
}
