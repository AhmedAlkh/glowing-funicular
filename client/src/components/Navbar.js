import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=> {
    return (
    <nav>
    <div className="nav-wrapper black">
      <Link to="/" className="brand-logo left">Memestragram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">sign up</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default NavBar