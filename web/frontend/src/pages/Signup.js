import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Signup.css";
import spotify from "../images/spotify.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(uname);
    try {
      await axios
        .post("http://localhost:8080/register", { uname })
        .then((res) => {
          console.log(res.data);
          navigate("/main");
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="body">
      <Header color="#12372A" />
      <div className="main">
        <div className="main-text">
          <h1>get the party started</h1>
          <p>Signup, host a party join a party and let the fun get started</p>
          <p>Already have an account? Login</p>
          <div className="song-images"></div>
        </div>
        <div className="form-holder">
          <p>For full features</p>
          <button>
            <p>Signup with Spotify</p>
            <img src={spotify} alt="" />
          </button>
          <p>No spotify no worry</p>
          <form onSubmit={handleSubmit}>
            <input
              value={uname || ""}
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => {
                setUname(e.target.value);
              }}
            />
            <br />
            <input type="password" placeholder="Password" name="password" />
            <br />
            <input
              type="password"
              placeholder="Verify Password"
              name="verifypassword"
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
