import React from 'react'
import './about.css'
import lightbulb from '../../assets/lightbulb.svg';
import arrowboingup from '../../assets/arrowboingup.svg';
import laptopguysleepy from '../../assets/laptopguysleepy.png';

const About = () => {
  return (
    <section id="about">
      <div className='port__about'>
        <div className="port__about-section">
          <div className='port__about-left-content'>

            <div className="port__title">
              <h2>About&nbsp;
                <span className='color'>Me</span>
              </h2>
              <img src={lightbulb} alt='Lightbulb' />
            </div>

            <div className="port__about-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis... <span className='color-text'>Read more</span></p> 
              <img className='arrowboing_about' src={arrowboingup} alt='Arrow boing up' />
            </div>
          </div>

          <div className='port__about-rigth-context'>
            <img className='laptopguysleepy' src={laptopguysleepy} alt='Laptop guy sleepy' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About