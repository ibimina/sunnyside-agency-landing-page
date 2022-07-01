
// import React from "react";
import React, { useState } from "react";
import logo from "../assets/images/logo.svg"
import Navigation from "./Navigation";
import arrows from "../assets/images/icon-arrow-down.svg"

function Header() {

const [icon,setIcon] =useState('false')
const [visible,setVisible]= useState('false')
const openMenu=()=>{
  if (icon==="false") {
    setIcon("true");
    setVisible("true")
  } else {
   setIcon("false");
   setVisible("false")
  }

}
    
    return (
      <>
        <header className="ii">
          <div className="head">
            <img src={logo} alt="logo icon" />
            <button
              className="mobile-navigation"
              aria-expanded={icon}
              onClick={openMenu}
            >
              <span className="sr-only">menu</span>
            </button>

            <Navigation visible={visible} />
          </div>
          <h1>
            WE ARE <span>CREATIVES</span>
          </h1>
       
          <img src={arrows} alt="arrow down icon"  className="arrow"/>
        </header>
      </>
    );
}

export default Header;