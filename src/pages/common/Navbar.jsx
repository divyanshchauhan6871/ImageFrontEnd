import React, { useState } from 'react'
import './commonStyles/navbar.css'



import { NavLink } from "react-router-dom";


const Navbar = ({userPoints}) => {
  
  const navLinkStyles = ({isActive})=>{
    return{
      color:isActive?'red':'white'
  };
  };

  return (
    <>
        <div className="main">
            <div className="left">
                <NavLink style={navLinkStyles} to={'./'}>Home</NavLink>
                <NavLink style={navLinkStyles} to={'./signup'}>Signup</NavLink>
                <NavLink style={navLinkStyles} to={'./login'}>Login</NavLink>
                <NavLink style={navLinkStyles} to={'./image-generator'}>Image Generator</NavLink>
                <NavLink style={navLinkStyles} to={'./history'}>History</NavLink>
                <NavLink style={navLinkStyles} to={'./contact'}>Contact</NavLink>
                <NavLink style={navLinkStyles} to={'./about'}>About</NavLink>
            </div>
            <div className="right">{userPoints}</div>
        </div>
    </>
  )
}

export default Navbar