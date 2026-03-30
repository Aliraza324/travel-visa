import React from 'react'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/About'
import Locations from '../components/home/Locations'
import Travel from '../components/home/Travel'
import Choose from '../components/home/Choose'
import Galleries from '../components/home/Galleries'
import Faq from '../components/home/Faq'
import { Testimonial } from '../components/home/Testimonial'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Locations/>
        <Travel/>
        <Choose/>
        <Galleries/>
        <Faq/>
        <Testimonial/>
        <Contact/>
    </div>
  )
}

export default Home