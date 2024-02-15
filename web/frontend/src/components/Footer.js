import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer">
      <p style={{color: props.color}}>
        &copy; Made by{" "}
        <a style={{color: props.color}}
          href="https://andrewarochukwu.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          andrew a.
        </a>{" "}
        2024
      </p>
    </div>
  );
}
