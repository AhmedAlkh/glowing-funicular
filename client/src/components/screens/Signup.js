import React,{useState, useEffect} from "react"
import {Link,useNavigate} from "react-router-dom";
import M from 'materialize-css'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState('')
    const [url, setUrl] = useState(undefined)
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])

    const uploadPic = () => {
        const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "memestagram")
      data.append("cloud_name", "memestagram")
      fetch("https://api.cloudinary.com/v1_1/memestagram/image/upload", {
        method: "POST",
        body:data
      }).then(res=>res.json())
      .then(data=>{
        setUrl(data.url)
        console.log(data.url)
      }).catch(err=>{
        console.log(err)
      })
    }
    const uploadFields = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return M.toast({html:"invalid email", classes:"red"})
         }
         fetch("/signup",{
             method:"post",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                 name,
                 password,
                 email,
                 pic: url
             })
         }).then(res=>res.json())
         .then(data=>{
             if(data.error) {
                 M.toast({html:data.error,classes:"red"});
             } else {
                 M.toast({html:data.message, classes:"green"})
                 navigate('/signin');
             }
         }).catch(err=>{
             console.log(err);
         })
    }
    const PostData = () => {
        if(image) {
            uploadPic()
        } else {
            uploadFields()
        }
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
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
         <div className="file-field input-field">
            <div className="btn waves-effect waves-light red">
                <span className="uploadPicButton">Upload Picture</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
        </div>
        <button className="btn waves-effect waves-light red" onClick={()=>PostData()}>
            Register Now!
        </button>
        
    </div>
    <Link to="/signin">Already a user? Click here to sign in</Link>
  </div>
    </div>
    );
}

export default Signup;