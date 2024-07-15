import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/succulent.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <span>Plant Lovers,</span>
            <div>
                <p>ASSEMBLE</p>
            </div>
            <div className="hero-latest-btn">
                <div style ={{background: "#ff4141"}}>Latest Collection</div>
                <img style ={{background: "#ff4141"}} src={arrow_icon} alt="" />
            </div>            
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='' />
        </div>
    </div>
  )
}

export default Hero