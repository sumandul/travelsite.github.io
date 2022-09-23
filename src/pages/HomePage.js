import React, { useState, useEffect, lazy, Suspense } from 'react'
import Banner from '../Components/Home/Banner'
import Service from '../Components/Home/Service'
import axios from 'axios'
import SliderComponent from '../Components/Home/Slider'
import Feature from '../Components/Home/Feature'
import Booking from '../Components/Home/Booking'
import Company from '../Components/Home/Company'
import Top from '../Components/Home/Top'

import Suscribe from '../Components/Home/Suscribe'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReview } from '../redux/Reducer'
const ClintReview = lazy(() => import('../Components/Home/ClintReview'))

const HomePage = () => {
  const review = useSelector((clint) => clint.review.review.data)
  console.log(review, 'revcie')
  const dispatch = useDispatch()
  const [popularTour, setPopular] = useState()
  const [featureTour, setFeatureTour] = useState()
  const [clintReview, setClintreview] = useState()

  useEffect(() => {
    fetchPopular()
    fetchFeature()
    dispatch(fetchReview())
  }, [dispatch])

  const fetchClienrReview = async () => {
    const response = await axios.get('/api/clientreviews')
    return setClintreview(response?.data)
  }
  const fetchFeature = () => {
    axios.get('/api/tours/featuredHolidays').then(({ data }) => {
      setFeatureTour(data)
    })
  }
  const fetchPopular = () => {
    axios.get('/api/tours/popular').then(({ data }) => {
      setPopular(data)
    })
  }
  // console.log(clintReview, 'swecd')
  return (
    <>
      <Banner />
      <Service />
      {popularTour && <SliderComponent popularTour={popularTour} />}
      {featureTour && <Feature featureTour={featureTour} />}
      <Booking />
      <Company />
      <Top />
      <Suspense fallback={<div>looding.....</div>}>
        {review && <ClintReview clintReview={review} />}
      </Suspense>
      <Suscribe />
    </>
  )
}

export default HomePage
