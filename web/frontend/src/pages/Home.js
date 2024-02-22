import React from "react";
import "./Home.css";
import Nav from "../components/post_login/Nav";
import SongDetails from "../components/post_login/SongDetails";
import search_img from "../images/search.png";
import Topper from "../components/post_login/HomeTopper";
import burna from "../images/burna.png";
import wizkid from "../images/wizkid.png";
import swae from "../images/swae.png";
import jcole from "../images/jcole.png";
import tiwa from "../images/tiwa.png";
import essence from "../images/essence.png";
import passionfruit from "../images/passionfruit.png";
import litbonus from "../images/litbonus.png";
import crenshaw from "../images/crenshaw.png";
import Track from "../components/post_login/Track";

export default function Home() {
  return (
    <div className="main">
      <Nav active="home" />
      <div className="main-content">
        <div className="main-top">
          <form>
            <div className="search-container">
              <img src={search_img} alt="" />
              <input type="text" placeholder="Search for song" />
            </div>
          </form>
        </div>
        <div className="top-artists">
          <Topper title="Top Artist" />
          <div className="artist-images">
            <img src={burna} alt="" />
            <img src={wizkid} alt="" />
            <img src={jcole} alt="" />
            <img src={swae} alt="" />
            <img src={tiwa} alt="" />
          </div>
        </div>
        <div className="top-tracks">
          <Topper title="Top Tracks" />
          <div className="track-container">
            <Track
              img={essence}
              title="Essence"
              artist="Wizkid"
              album="Made in Lagos"
              time="4:08"
            />
            <Track
              img={passionfruit}
              title="Passionfruit"
              artist="Drake"
              album="More Life"
              time="3:32"
            />
            <Track
              img={essence}
              title="Essence"
              artist="Wizkid"
              album="Made in Lagos"
              time="4:08"
            />
            <Track
              img={passionfruit}
              title="Passionfruit"
              artist="Drake"
              album="More Life"
              time="3:32"
            />
            <Track
              img={essence}
              title="Essence"
              artist="Wizkid"
              album="Made in Lagos"
              time="4:08"
            />
            <Track
              img={passionfruit}
              title="Passionfruit"
              artist="Drake"
              album="More Life"
              time="3:32"
            />
            
          </div>
        </div>
        <div className="rec-tracks">
          <p>Recently Played Tracks</p>
          <div className="track-container">
            <Track
              img={essence}
              title="Essence"
              artist="Wizkid"
              album="Made in Lagos"
              time="4:08"
            />
            <Track
              img={passionfruit}
              title="Passionfruit"
              artist="Drake"
              album="More Life"
              time="3:32"
            />
            <Track
              img={essence}
              title="Essence"
              artist="Wizkid"
              album="Made in Lagos"
              time="4:08"
            />
            <Track
              img={passionfruit}
              title="Passionfruit"
              artist="Drake"
              album="More Life"
              time="3:32"
            />
            <Track
              img={essence}
              title="Essence"
              artist="Wizkid"
              album="Made in Lagos"
              time="4:08"
            />
            <Track
              img={passionfruit}
              title="Passionfruit"
              artist="Drake"
              album="More Life"
              time="3:32"
            />
            
          </div>
        </div>
      </div>
      <SongDetails />
    </div>
  );
}
