import React from 'react'
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="nav-container">
    <div class="logo-flex">
      <img src={logo} alt="Logo here" />
      <h1>Winfluence</h1>
    </div>
    <div className="link-flex">
      <a href="">Services</a>
      <a href="">Work</a>
      <a href="">Clients</a>
      <a href="">FAQs</a>
      <a href="">Contact us</a>
    </div>
    <div className="button-flex">
        <button className="white">Login</button>
        <button className="fill">Sign Up</button>
    </div>
  </div>
  )
}

export default Navbar