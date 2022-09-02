import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BreadCrump from '../utilities/BreadCrump'
import Breadcrumbs from '../utilities/BreadCrump'
import Filter from './Filter'
import TripCtalog from './TripCtalog'
import Suscribe from '../Home/Suscribe'
import { useParams } from 'react-router-dom'

import axios from 'axios'
// import select from '../reuableComponent/Select'
const Trip = () => {
  const { slug } = useParams()
  const [tours, setTour] = useState()
  useEffect(() => {
    const response = axios.get('api/destination/' + slug).then(({ data }) => {
      setTour(data)
    })
  }, [])
  console.log(tours, 'hhh')
  return (
    <>
      <div className="breadcrump">
        <BreadCrump />
      </div>
      <Container>
        <div className="expedition">
          <div className="filter-box">
            <Filter />
          </div>
          <div className="triplist">
            <TripCtalog tour={tours} place={slug} />
          </div>
        </div>
      </Container>
      <Suscribe />
    </>
  )
}

export default Trip
