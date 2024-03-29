import React from "react";
import "./Party.css";
import Nav from "../components/post_login/Nav";
import SongDetails from "../components/post_login/SongDetails";
import essence from "../images/essence.png";
import passionfruit from "../images/passionfruit.png";
import { Link } from "react-router-dom";

export default function Party() {
  return (
    <div className="main">
      <Nav active="party" />
      <div className="main-content">
        <div className="info">
          <p className="info-text">
            With spartify host parties and events and let guests decide what
            they want to hear.
            <br />
            Join a party now or create a party to get fun started.
          </p>
          <form>
            <input type="text" placeholder="enter party code" />
            <br />
            <button className="party-button">Join Party</button>
          </form>
          <Link to="/thisparty">
            <button className="party-button">Create Party</button>
          </Link>
        </div>
        <div className="past-parties">
          <p>Recent Parties</p>
          <div className="prev-party-links">
            <div className="prev-party">
              <img width="20%" src={essence} alt="" />
              <img width="20%" src={essence} alt="" />
              <img width="20%" src={essence} alt="" />
              <img width="20%" src={essence} alt="" />
              <img width="20%" src={essence} alt="" />
              <img width="20%" src={essence} alt="" />
              <img width="20%" src={essence} alt="" />
            </div>
          </div>
        </div>
      </div>
      <SongDetails />
    </div>
  );
}
