import React from "react";
import logo from "./img/download.svg"

const Navbar = () => {
    return (
        <div className="Navbar navbar-wrapper">
         <nav className="nava">
        <div className="logo">
            <img src={logo} style={{width:"30px"}} />
             <span className="logo-name">ReactFacts</span>
        </div>
  
        <ul className="ns-nav">
          <li>React Course</li>
          <li>- Project 1</li>
        </ul>
      </nav>
  
        </div>
     
    );
  };
  
  
  export default Navbar;