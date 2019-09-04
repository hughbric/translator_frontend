import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Health & Safety</h1>
      <h2>Translator</h2>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
    </header>
  );
}

const headerStyle = {
  background: "#ADD8E6",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
