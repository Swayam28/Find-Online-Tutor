import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import "../pages/home.css";

function Home(){
    return(
        <div>
            <Navbar/>
            <div className="boxf">
                {/* <div className="inf">
                    <center><b>Don't let geography or schedule <br/> limit your learning potential.<br/> With Find Online Tutor,<br/> you can learn anywhere, anytime.<br/> Let's get started!</b></center>

                </div> */}
                <span className="compic">
                    <img src="https://i.fbcd.co/products/original/828e6d65083b155295e5d72ff947bb61781bdc7204314e92088b5af9b0785635.jpg" />
                </span>
            </div>
            
        </div>
    );
}

export default Home;