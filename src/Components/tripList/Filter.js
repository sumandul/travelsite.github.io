import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import Checkbox from '@mui/material/Checkbox'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import { Link } from 'react-router-dom'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const Filter = () => {
  return (
    <>
      <div className="filter-title">
        <h1>Filter by </h1>
      </div>

      <div>
        <div className="filter-container mt-4">
          <div className="check-box">
            <div className=" ">
              <h6>Departure Date</h6>
            </div>
            <div className="spesifice-date mb-2">
              <CalendarMonthIcon className="date" />{' '}
              <span>Select specific Date</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Jun 2022</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Jun 2022</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Jun 2022</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Jun 2022</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Jun 2022</span>
            </div>
            <div className="view-more ms-2">
              <Link to={'/'}>View More</Link>
            </div>
          </div>
          <div className="check-box">
            <div className="d-flex align-items-center mb-1">
              <TravelExploreIcon className="me-2" /> <h6>Tour</h6>
            </div>
            <div>
              <Checkbox {...label} /> <span>Group Tours</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Small Group TOurs</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Private Tours</span>
            </div>
          </div>
          <div className="check-box activities">
            <div className="d-flex align-items-center   mb-1">
              <DirectionsBikeIcon className="me-2" /> <h6>Activities</h6>
            </div>
            <div>
              <Checkbox {...label} /> <span> Expeditions</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Trekking</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Tours</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Peak Climbing</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Rafting</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Heli Tours</span>
            </div>
            <div>
              <Checkbox {...label} /> <span>Hiking</span>
            </div>
            <div className="view-more ms-2">
              <Link to={'/'}>View More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
