import React from 'react'
import './form.css';
import { FiSend } from "react-icons/fi";
import { Button } from '../../components';

const Form = () => {
  return (
    <div className='port__form'>
        <div className="port__input-name-email">
            <div className='input-form'>
                <label htmlFor="name">Your name</label>
                <input type='text' id='name' placeholder='Name' required='required' />
            </div>
            <div className='input-form'>
                <label htmlFor="email">Your email</label>
                <input type='text' id='email' placeholder='Email' required='required' />
            </div>
        </div>

        <div className="port__input-message">
            <div className='input-form'>
                <label htmlFor="message">Your massege</label>
                <textarea type='text' id='message' placeholder='Message' rows='10' required='required' />
            </div>
        </div>
        <Button color="noicon" text="Send&nbsp;Message" icon={<FiSend />}  />
    </div>
  )
}

export default Form