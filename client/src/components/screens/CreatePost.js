import React from "react";

const CreatePost = () => {
    return(
        <div className="card input-field" style={{margin:"10px auto", maxWidth:"500px", padding:"20px", textAlign:"center"}}>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div className="file-field input-field">
      <div className="btn waves-effect waves-light red">
        <span>Choose Image</span>
        <input type="file" />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
    <button className="btn waves-effect waves-light red">
                Submit Post
            </button>
        </div>
    )

}

export default CreatePost