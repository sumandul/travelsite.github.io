import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import SearchIcon from '@mui/icons-material/Search'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined'
import DatePickerComponent from '../utilities/DatePicker'
import { motion } from 'framer-motion'
import SelecteComponent from '../utilities/Selecte'
import { useInView } from 'react-intersection-observer'
const options = [
  { value: 'Pokhara', label: 'Pokhara' },
  { value: 'Mustang', label: 'ustang' },
  { value: 'Manag', label: ' Manag' },
  { value: 'Chitwan', label: 'Chitwan' },
  { value: 'Bardiya ', label: 'Bardiya ' },
]
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-title">
            <motion.h1
              initial={{ opacity: 0, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
            >
              Your Journey Begins Here.
            </motion.h1>
          </div>
          <div>
            <motion.div className="trip">
              <Row className="gy-5">
                <Col md={12} lg={3}>
                  <div className="d-flex">
                    <NearMeOutlinedIcon className="left-icon" />{' '}
                    <p>Where are you going?</p>
                  </div>
                  <div className="">
                    <SelecteComponent options={options} />
                  </div>
                </Col>
                <Col md={12} lg={3}>
                  <div className="d-flex">
                    <LocalActivityOutlinedIcon className="left-icon" />
                    <p>Activity Types</p>
                  </div>
                  <SelecteComponent options={options} />
                </Col>
                <Col md={6} lg={2}>
                  <div className="d-flex ">
                    <CalendarMonthOutlinedIcon className="left-icon" />
                    <p>Trip Start</p>
                  </div>
                  <DatePickerComponent />
                </Col>
                <Col md={6} lg={2}>
                  <div className="d-flex">
                    <CalendarMonthOutlinedIcon className="left-icon" />{' '}
                    <p>Trip End</p>
                  </div>
                  <DatePickerComponent />
                </Col>
                <Col md={5} lg={2}>
                  <button className="search-trip">
                    <div className="d-flex align-items-center jutify-content-center">
                      <SearchIcon className="seach-icon" /> <p>SEARCH</p>
                    </div>
                  </button>
                </Col>
              </Row>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
