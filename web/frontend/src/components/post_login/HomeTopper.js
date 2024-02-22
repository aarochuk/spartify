import React from "react";
import "./HomeTopper.css";

export default function Topper(props) {
  return (
    <div className="top-title">
      <p>{props.title}</p>
      <div>
        <p>All Time</p>
        <p>Last 6 Months</p>
        <p>Last 4 Months</p>
      </div>
    </div>
  );
}
