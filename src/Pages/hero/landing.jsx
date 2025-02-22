import React from 'react'
import img1 from '../../assets/Iamge1.png'
import img2 from '../../assets/Image2.png'
import img3 from '../../assets/Image3.png'


function Landing() {
  return (
    <div className='landing-container'>
    <div class='landing-flex'>
        <div class='landing-text'>
            <h1>Advertising Gen-Z Style</h1>
            <p>
                Shaping Next-gen  
                <br/>
                <span className='landing-span'>Advertising</span>
                with 
                <br/>
                <span className='blue gen-span'>Gen-Z</span> Creativity
            </p>
        </div>
        <div className="landing-image">
            <div classname='img-flex'>
            <div id='img1'><img src={img1} alt="" /></div>
            <div id='img2'><img src={img2} alt="" /></div>
            <div id='img3'><img src={img3} alt="" /></div>

            </div>
            
        </div>
      
    </div>
    <div className="landing-footer">
      <div className="footer-left">
        <h1>Lorem</h1>
        <h2>Lorem, ipsum dolor.</h2>
      </div>
      <div className='footer-right'><p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, deserunt.</p></div>
    </div>
    </div>
  )
}

export default Landing