import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='logo' src={assets.logoup} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae quidem cumque molestiae ut possimus dignissimos corrupti maxime distinctio, deleniti eaque magni ad, dolore natus. Consectetur laudantium ullam perspiciatis quisquam?</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-564-66</li>
            <li>sahana@gmail.com</li>
          </ul>
           </div>
        </div>
      <hr />
      <p className='footer-copyright'>copyright 2024 @Tomato.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer