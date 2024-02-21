import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav-bar">
      <button className="active">Home</button>
      <button>Party</button>
      <button>Songs</button>
    </div>
  );
}
