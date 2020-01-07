import React from "react";
import { Link } from "react-router-dom";

//conditional logic to toggle view of sign in button to disappear once logged in, and for the hamburger icon to appear

function NavBar() {
  return (
    <nav className="nav">
      <div className="logoContainer">
        <Link to="/"><h2 className="logo"><span className="green">Chef</span>Port<span className="green">.</span></h2></Link>
      </div>

      <div className="navItems">
        <Link>Recipes</Link>
        <Link>Meet The Chefs</Link>
        <Link>Videos</Link>
        <Link>FAQ</Link>
      </div>

      <div className="buttonContainer">
        <Link to="/sign-in"><button className="signIn">Sign In</button></Link>
        <p className="hamburger">|||</p>
      </div>
    </nav>
  );
}

export default NavBar;
