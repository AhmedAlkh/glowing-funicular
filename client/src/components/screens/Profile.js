import React from "react"

const Profile = () => {
    return (
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin:"20px 0px",
                borderBottom: "1px solid black"

            }}>
                <div>
                    <img style={{width:"175px", height: "175px", borderRadius: "87px", margin:"20px 0px"}} 
                    src="https://images.unsplash.com/photo-1487528001669-63c47a53fd39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                    <h4>Test Name</h4>
                    <div style={{display:"flex", justifyContent: "space-between", width:"110%"}}>
                        <h6>XX Posts</h6>
                        <h6>XX Followers</h6>
                        <h6>XX Following</h6>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1523379204-ac6d21e877f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1523379204-ac6d21e877f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1523379204-ac6d21e877f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1523379204-ac6d21e877f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1523379204-ac6d21e877f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1523379204-ac6d21e877f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div>
    );
}

export default Profile;