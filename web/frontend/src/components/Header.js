import React from "react";
import './Header.css'

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-text">
        <h1 style={{color: props.color}}>spartify</h1>
        <p style={{color: props.color}}>party democracy</p>
      </div>
      <div className="header-button">
          <button>FAQ</button>
          <button>Log in</button>
    </div>
    </div>
  );
}
