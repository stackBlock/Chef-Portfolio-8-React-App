import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return(
    <footer className="footer">
      <div className="logoContainer">
        <Link to="/"><h2 className="logo footerLogo"><span className="green">Chef</span>Port<span className="green">.</span></h2></Link>
      </div>

      <div className="footerNavItems">
        <Link>Recipes</Link>
        <Link>Meet The Chefs</Link>
        <Link>Videos</Link>
        <Link>FAQ</Link>
      </div>

      <div className="iconContainer">
        <p>F</p>
        <p>T</p>
        <p>I</p>
      </div>

      <div className="copyrightContainer">
        <p>2019 Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
