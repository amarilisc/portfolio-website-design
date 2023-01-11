import React from 'react'
import './about.css'
import musicalnote from '../../assets/musicalnote.svg';
import lightbulb from '../../assets/lightbulb.svg';
import arrowboingup from '../../assets/arrowboingup.svg';
import laptopguysleepy from '../../assets/laptopguysleepy.png';

const About = () => {
  return (
    <section id="about">
      <div className='port__about'>
        <img src={musicalnote} alt='Musical note' />
        <div className='left-context'>
          <h2>About&nbsp;
            <span className='color'>Me</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis...Read more</p> 
          <img src={lightbulb} alt='Lightbulb' />
          <img src={arrowboingup} alt='Arrow boing up' />
        </div>
        <div className='rigth-context'>
          <img src={laptopguysleepy} alt='Laptop guy sleepy' />
        </div>
      </div>
    </section>
  )
}

export default About