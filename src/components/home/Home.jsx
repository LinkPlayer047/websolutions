import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Result from './components/Result'
import Portfolio from './components/Portfolio'
import About from './components/About'
import ContactForm from './components/ContactForm'

const Home = () => {
  return (
    <div>
        <Hero />
        <Experience />
        <Result /> 
        <Portfolio />
        <About />
        <ContactForm />
    </div>
  )
}

export default Home