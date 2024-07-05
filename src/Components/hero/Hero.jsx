import React from "react";
import "./Hero.css";
import Navbar from "./navbar";
import Landing from "./landing";
function Hero() {
  return (
    <div className="container">
     <Navbar/>
     <Landing/>
    </div>
  );
}

export default Hero;
