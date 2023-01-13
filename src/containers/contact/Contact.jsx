import React from 'react'
import './contact.css'
import { Form } from '../../components';
import graphicguy from '../../assets/graphicguy.png';
import mail from '../../assets/mail.svg'

const Contact = () => {
  return (
    <section id="contact">
        
      <div className='port__contact'>
          
        <div className="port__contact-left-content">
        <h2>
          Got&nbsp;a&nbsp;project&nbsp;in <br /><span className="color">mind?</span>
        </h2>
        <img src={graphicguy} alt='Graphic guy' />
        </div>
        <div className="port__contact-right-content">
          <Form />
          <img src={mail} alt="mail" />
        </div>
      </div>
    </section>
    
  )
}

export default Contact