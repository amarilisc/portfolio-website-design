import React from 'react'

import { About, Contact, Footer, Home, Projects } from './containers';
import { Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App