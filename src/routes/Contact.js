import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT' text='Contact GLX Travel' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact