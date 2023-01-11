import React from 'react';
import './home.css';
import { Button } from '../../components';
import laptopguy from '../../assets/laptopguy.png';
import arrowboing from '../../assets/arrowboing.svg';
import { FiDownload } from 'react-icons/fi';
import { BsArrowDown } from "react-icons/bs";

const Home = () => {
  return (
    <section id="home">
      <div className='port__home'>
        <div className="port__home_section">
          <div className="port__home-left">
            <img className='arrowboing'  src={arrowboing} alt="Arrow boing" />
          
            <div className='port__home-text'>
              <h1>CREATIVE&nbsp;UI <br />
              <span className='color'>DESIGNER</span>
              </h1>
              
            
              <div className='port__btn'>
                <Button color="noicon" text="Hire me" href="#contact" />
                <Button color="icon" text="Download CV" icon={<FiDownload />} />
              </div>
            </div>
          </div>
          <img className='port__illustration' src={laptopguy} alt="Laptop guy" />
        </div>
          
        <div className='port__downarrow'>
          <a className='downarrow' href='#about' >
            <BsArrowDown color="#fff" size={35} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home