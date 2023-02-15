import React from "react";
import "../App.css";
import {NavLink} from "react-router-dom";
import {FaUserGraduate} from 'react-icons/fa';
import {RiShutDownLine} from 'react-icons/ri';
import { BsSearch} from "react-icons/bs";

function Studnav(){
    return(
        <div className="nav">
            <ul id="nav">
                <li><NavLink className="link" exact to="/home"><FaUserGraduate className="icon"></FaUserGraduate></NavLink></li>
                <li className="itm cat"><NavLink className="link" exact to="/scat">Categories</NavLink></li>
                <li>
                    <form id="search">
                        <button type="submit" ><BsSearch></BsSearch></button>
                        <input type="text" placeholder="Search for courses" />
                    </form>
                </li>
                <li className="itm class" ><NavLink className="link" exact to="/student">Classroom</NavLink></li>
                <li className="itm un">
                    <NavLink className="link" exact to="/student">Username</NavLink>
                </li>
                <li className="logout">
                    <NavLink className="link" exact to="/home"><RiShutDownLine className="icon"></RiShutDownLine></NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Studnav;