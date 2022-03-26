import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import M from 'materialize-css';

const Login = () => {

    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
           return M.toast({html:"invalid email", classes:"red"})
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error) {
                M.toast({html:data.error,classes:"red"});
            } else {
                M.toast({html:"Signed in Successfully", classes:"green"})
                navigate('/');
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="mycard">
            <div className="card auth-card">
        <div className="card-content black-text">
            <h2>Memestagram</h2>
            <h3>Login</h3>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
            <button className="btn waves-effect waves-light red" onClick={()=>PostData()}>
                Login
            </button>
        </div>
        <Link to="/signup">Dont have a profile? Click here to sign up!</Link>
      </div>
        </div>
    );
}

export default Login;