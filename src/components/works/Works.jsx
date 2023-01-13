import React from 'react'
import './works.css';

const Works = ( { image, description }) => {
  return (
    <div className='port__works fade-in-fwd'>
        <img src={image} alt={description} size={15}/>
    </div>
  )
}

export default Works