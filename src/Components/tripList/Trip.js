import React from 'react'
import { Container } from 'react-bootstrap'
import BreadCrump from '../utilities/BreadCrump'
import Filter from './Filter'
import TripCtalog from './TripCtalog'
// import select from '../reuableComponent/Select'
const Trip = () => {
  return (
    <>
      <div className="breadcrump">
        <BreadCrump />
      </div>
      <Container>
        <div className="expedition">
          <div className="filter-box">
            <Filter />
            {/* <select /> */}
          </div>
          <div className="triplist">
            <TripCtalog />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Trip
