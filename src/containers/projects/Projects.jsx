import React from 'react'
import './projects.css'
import landingpage from '../../assets/landingpage.png'
import laptoppage from '../../assets/laptoppage.png'
import mobilepage from '../../assets/mobilepage.png'
import { Button } from '../../components';
import { Works } from '../../components';

const Projects = () => {
  return (
    <section id="jobs">
      <div className="port__projects">
        <div className='port__projects-title'>
          <h2>My recent
            <span className='color'> works</span>
          </h2>
        </div>
        <div className="port__projects-buttons">
          <ul>
            <li><Button color="noicon" text="All" href="#" /></li>
            <li><Button color="icon" text="UI" href="#" /></li>
            <li><Button color="icon" text="UX" href="#" /></li>
            <li><Button color="icon" text="Web&nbsp;Design" href="#" /></li>
          </ul>
        </div>
        <div className="port__projects-works">
          <ul>
            <li><Works image={landingpage} description="Landing Page" /></li>
            <li><Works image={laptoppage} description="Laptop Page" /></li>
            <li><Works image={mobilepage} description="Mobile Page" /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects