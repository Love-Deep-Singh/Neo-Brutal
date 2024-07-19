import React from 'react'
import "./About.css"
import bar from "../../assets/bar.png"
import shapes from "../../assets/shapes.png"
import jar from "../../assets/jar.png"


function About() {
  return (
    <div className='about-container'>
        <div className="about-text">
            <div className='about-heading'> 
              <h1>
                IGNITING  <span>BUSINESS GROWTH</span><br/> THROUGH CAMPAIGNS
              </h1>
                
            </div>
            <div className="about-card">
              <h1>
                Our Misson
              </h1>
              <img id="bar" src={bar}/>
              <p>At Winfluence, we pioneer the ad agency landscape by uniting small agencies to ignite creative sparks. We amplify diverse talents, reshaping advertising dynamics. 
                </p>
                <p>Our unique teamwork approach unlocks each agency's strengths, crafting attention-grabbing campaigns that redefine success.
                  </p>
            </div>
            

        </div>
        <div className='about-image'>
        <img id="shapes" src={shapes}/>
        <img id="jar" src={jar}/>
        </div>
    </div>
  )
}

export default About