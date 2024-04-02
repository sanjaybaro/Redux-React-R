import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/login">LOGIN</Link>
      <Link to="/counter">COUNTER</Link>
      <Link to="/todo">TODO</Link>
      <Link to="/">HOME</Link>
    </div>
  );
}

export default Navbar;
