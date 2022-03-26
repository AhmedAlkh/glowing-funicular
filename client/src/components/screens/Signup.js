import React,{useState} from "react"
import {Link,useNavigate} from "react-router-dom";
import M from 'materialize-css'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error) {
                M.toast({html:data.error,classes:"red"});
            } else {
                M.toast({html:data.message, classes:"green"})
                navigate('/login');
            }
        })
    }

    return (
        <div className="mycard">
        <div className="card auth-card">
    <div className="card-content black-text">
        <h2>Memestagram</h2>
        <h3>Sign Up</h3>
        <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
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
            Register Now!
        </button>
        
    </div>
    <Link to="/login">Already a user? Click here to sign in</Link>
  </div>
    </div>
    );
}

export default Signup;