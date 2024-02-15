import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-text">
        <StyledLink to="/">
          <h1 style={{ color: props.color }}>spartify</h1>
        </StyledLink>
        <p style={{ color: props.color }}>party democracy</p>
      </div>
      <div className="header-button">
        <Link to="/signup">
          <button className="button">Signup</button>
        </Link>

        <button className="button">Log in</button>
      </div>
    </div>
  );
}
