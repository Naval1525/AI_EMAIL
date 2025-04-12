import React from 'react'
import Hero from '../pages/Hero'
import WhatWeOffer from './../pages/WhatWeOffer';
import HowItWorks from './../pages/HowItWorks';
import ContactUs from './../pages/ContactUs';

const Landing = () => {
  return (
    <div>
      <Hero/>
      <WhatWeOffer/>
      <HowItWorks/>
      <ContactUs/>
    </div>
  )
}

export default Landing