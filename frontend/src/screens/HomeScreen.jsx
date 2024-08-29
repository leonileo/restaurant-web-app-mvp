// PROJECT POWERD BY LABA CREATIVES
// HomeScreen.jsx
// Import necessary modules
import React from 'react'
import Hero from '../components/Hero.jsx'
import AboutUsComponent from '../components/AboutUsComponent.jsx'
import SpecialsComponent from '../components/SpecialsComponent.jsx'
import EventsComponent from '../components/EventsComponent.jsx'
import ContactUsComponent from '../components/ContactUsComponent.jsx'
import HeaderComponent from '../components/HeaderComponent.jsx'
import FooterComponent from '../components/FooterComponent.jsx'


const HomeScreen = () => {
  return (
    <>
      <HeaderComponent />
        <Hero />
        <AboutUsComponent />
        <SpecialsComponent />
        <EventsComponent />
        <ContactUsComponent />
      <FooterComponent />
    </>
  )
}

export default HomeScreen
// PROJECT POWERD BY LABA CREATIVES