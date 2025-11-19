import React from 'react'
import CareerHero from './components/CareerHero'
import CareerAbout from './components/CareerAbout'
import CareerBefinit from './components/CareerBefinit'
import CareerWork from './components/CareerWork'
import CareerCompany from './components/CareerCompany'
import CareerButtons from './components/CareerButtons'

const Career = () => {
  return (
    <div>
        <CareerHero />
        <CareerAbout />
        <CareerBefinit />
        <CareerWork />
        <CareerCompany />
        <CareerButtons />
    </div>
  )
}

export default Career