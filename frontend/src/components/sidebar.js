import React from "react";
import "../App.css";
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';
import { NavLink} from "react-router-dom";

function Sidebar(){
  return(
    <div className="sidenav">
      
      <div>
      <ul>
        <li >
          <NavLink className="link" exact to="/home">
            <span className="ic">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" exact to="/categories">
            <span className="ic">Course</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" exact to="/tsignup">
            <span className="ic">Tutor Signup</span>
          </NavLink>
        </li>
        <li >
          <NavLink className="link" exact to="/login">
            <span className="ic">Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" exact to="/signup">
            <span className="ic">SignUp</span>
          </NavLink>
        </li>
      </ul>
        {/* <a href="#" className="link"><span className="ic"><AiOutlineHome></AiOutlineHome></span>Home</a>
        <a href="#about" className="link"><span className="ic"><BsPerson></BsPerson></span>About</a>
        <a href="#resume" className="link"><span className="ic"><HiOutlineDocumentText></HiOutlineDocumentText></span>Resume</a>
        <a href="#portfolio" className="link"><span className="ic"><CgWebsite></CgWebsite></span>Portfolio</a>
        <a href="#contact" className="link"><span className="ic"><AiOutlineMail></AiOutlineMail></span>Contact</a> */}
      </div>
    </div>
  );
}

export default Sidebar;