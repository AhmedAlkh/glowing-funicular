import React, {useContext} from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import {UserContext} from '../App'

const NavBar = ()=> {
  const{state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
    if(state) {
      return [
        <li><Link to="/profile">My Profile</Link></li>,
        <li><Link to="/createpost">Create Post</Link></li>
      ]
    } else {
      return [
        <li><Link to="/signin">Login</Link></li>,
        <li><Link to="/signup">Sign Up</Link></li>
      ]
    }
  }
    return (
    <nav>
    <div className="nav-wrapper black">
      <Link to={state?"/":"/signin"} className="brand-logo left">Memestragram</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}
      </ul>
    </div>
  </nav>
    )
}

export default NavBar