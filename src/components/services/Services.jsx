import React from 'react'
import ServicesHero from './components/ServicesHero'
import ServicesSolutions from './components/ServicesSolutions'
import ServicesContact from './components/ServicesContact'

const Services = () => {
  return (
    <div>
        <ServicesHero />
        <ServicesSolutions />
        <ServicesContact />
    </div>
  )
}

export default Services