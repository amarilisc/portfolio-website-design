import React from 'react'
import './footer.css'
import { FiHome, FiPhone, FiUser, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer">
      <div className='port__footer'>
        <ul className="port__footer-about">
          <li><a href="#home"><FiHome /> Home</a></li>
          <li><a href="#about"><FiUser /> About&nbsp;me</a></li>
          <li><a href="#contact"><FiPhone /> Contact</a></li>
        </ul>

        <ul className="port__footer-social-media">
          <li><a href="#footer"><FiFacebook /></a></li>
          <li><a href="#footer"><FiInstagram /></a></li>
          <li><a href="#footer"><FiTwitter /></a></li>
          <li><a href='#footer'><FiYoutube /></a></li>
        </ul>
      
        <p className="port__footer-privacy">Terms of Service - Privacy Policy</p>
      </div>
    </section>
  )
}

export default Footer