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
        <div>
          <p>Join Party</p>
          <form>
            <input type="text" placeholder="enter party code"/>
          </form>
        </div>
        <div>
        <p>Get the fun started and give people the party code</p>
          <p>
          <Link to="/thisparty">
          <button className="party-button">Create Party</button>
          </Link></p>
        </div>
        <div>
          <p>Recent Parties</p>
          <div>
            <img width="33%" src={essence} alt=""/>
            <img width="33%" src={essence} alt=""/>
            <img width="33%" src={essence} alt=""/>
            <img width="33%" src={essence} alt=""/>
            <img width="33%" src={essence} alt=""/>
            <img width="33%" src={essence} alt=""/>
            <img width="33%" src={essence} alt=""/>
          </div>
        </div>
      </div>
      <SongDetails />
    </div>
  );
}
