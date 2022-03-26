import React from "react"
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="mycard">
        <div className="card auth-card">
    <div className="card-content black-text">
        <h2>Memestagram</h2>
        <h3>Sign Up</h3>
        <input
            type="text"
            placeholder="name"
        />
        <input
            type="text"
            placeholder="email"
        />
        <input
            type="text"
            placeholder="password"
        />
        <button className="btn waves-effect waves-light red">
            Register Now!
        </button>
        
    </div>
    <Link to="/login">Already a user? Click here to sign in</Link>
  </div>
    </div>
    );
}

export default Signup;