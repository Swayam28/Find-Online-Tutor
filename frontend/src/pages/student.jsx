import React from "react";
import Studnav from "../components/studnav";
import "../pages/student.css";

function Student(){
    return(
        <div>
            <Studnav/>
            <div className="head">Welcome Back !!</div>
            
            <div className="bx1">Enroll for courses <br/> with the best teachers</div>
            <div className="offer">Get 50 % discount on courses. <br/> Offer valid till 12 pm today !!</div>
        </div>
    );
}

export default Student;