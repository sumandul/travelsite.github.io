import React from 'react'
import Banner from '../Components/Home/Banner'
import Service from '../Components/Home/Service'

import SliderComponent from '../Components/Home/Slider'
import Feature from '../Components/Home/Feature'
import Booking from '../Components/Home/Booking'
import Company from '../Components/Home/Company'
import Top from '../Components/Home/Top'
import ClintReview from '../Components/Home/ClintReview'
import Suscribe from '../Components/Home/Suscribe'
const HomePage = () => {
  return (
    <>
      <Banner />
      <Service />
      <SliderComponent />
      <Feature />
      <Booking />
      <Company />
      <Top />
      <ClintReview />
      <Suscribe />
    </>
  )
}

export default HomePage
