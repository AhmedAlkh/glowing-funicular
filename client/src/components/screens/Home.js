import React from "react"

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Test User</h5>
                <div className= "card-image">
                    <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2694&q=80" />
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This is a sample post text</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
    );
}

export default Home;