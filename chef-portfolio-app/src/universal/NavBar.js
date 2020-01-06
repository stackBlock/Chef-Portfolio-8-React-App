import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>I am the NavBar</h1>
      <Link>I am a link</Link>
      <Link>I am a link</Link>
      <Link to="/sign-in">Sign In</Link>
    </nav>
  );
}

export default NavBar;
