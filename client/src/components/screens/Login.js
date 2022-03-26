import React, { useState } from "react"
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="mycard">
            <div className="card auth-card">
        <div className="card-content black-text">
            <h2>Memestagram</h2>
            <h3>Login</h3>
            <input
                type="text"
                placeholder="email"
            />
            <input
                type="text"
                placeholder="password"
            />
            <button className="btn waves-effect waves-light red">
                Login
            </button>
        </div>
        <Link to="/signup">Dont have a profile? Click here to sign up!</Link>
      </div>
        </div>
    );
}

export default Login;