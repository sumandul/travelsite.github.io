import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Carousel } from 'react-bootstrap'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import SearchIcon from '@mui/icons-material/Search'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined'
import DatePickerComponent from '../utilities/DatePicker'
import { motion } from 'framer-motion'
import SelecteComponent from '../utilities/Selecte'
import { useInView } from 'react-intersection-observer'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { tourSearch } from '../../redux/Reducer'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { height } from '@mui/system'

// const options = [
//   { value: 'Pokhara', label: 'Pokhara' },
//   { value: 'Mustang', label: 'ustang' },
//   { value: 'Manag', label: ' Manag' },
//   { value: 'Chitwan', label: 'Chitwan' },
//   { value: 'Bardiya ', label: 'Bardiya ' },
// ]

const Banner = () => {
  const navigate = useNavigate()
  const data = useSelector((item) => item.bannerSetting.setting)
  const [search, setSearch] = useState()
  const [date, setDate] = useState()
  const [selectPlace, setPlace] = useState()
  const [activity, setActivity] = useState()
  const handleSelect = (e) => {
    setPlace(e.value)
  }
  const handleSelectActivity = (e) => {
    setActivity(e.value)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    fetchSearch()
  }, [])
  const fetchSearch = () => {
    axios.get('/api/searches').then(({ data }) => {
      setSearch(data)
    })
  }
  const handleDate = (e) => {
    setDate(e)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    console.log(selectPlace, activity, date, 'search')
    dispatch(tourSearch({ selectPlace, activity, date }))
    navigate('/search')
  }

  return (
    <>
      <div className="banner">
        <Carousel controls={true} interval={1500}>
          <Carousel.Item>
            <div className="banner-img">
              <img
                src={window.baseURL + data?.data?.banner_image}
                alt=""
                loading="lazy"
                className="img-fluid"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="banner-img">
              <img
                src={window.baseURL + data?.data?.banner_image}
                alt=""
                loading="lazy"
                className="img-fluid"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="banner-img">
              <img
                src={window.baseURL + data?.data?.banner_image}
                alt=""
                loading="lazy"
                className="img-fluid"
              />
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="container">
          <div className="banner-title">
            <motion.h1
              initial={{ opacity: 0, translateX: -600 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
            >
              {data?.data?.title}
            </motion.h1>
          </div>
          <div>
            <motion.div className="trip">
              <form action="" onSubmit={searchHandler}>
                <Row className="gy-2">
                  <Col xs={12} md={4} lg={4}>
                    <div className="d-flex">
                      <NearMeOutlinedIcon className="left-icon" />{' '}
                      <p>Where are you going?</p>
                    </div>
                    <div className="">
                      <SelecteComponent
                        options={search?.destinations}
                        onchange={handleSelect}
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <div className="d-flex">
                      <LocalActivityOutlinedIcon className="left-icon" />
                      <p>Activity Types</p>
                    </div>
                    <SelecteComponent
                      onchange={handleSelectActivity}
                      options={search?.activities}
                    />
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <div className="d-flex ">
                      <CalendarMonthOutlinedIcon className="left-icon" />
                      <p>Trip Start</p>
                    </div>
                    <DatePickerComponent
                      Icon={<AccessTimeIcon className="month" />}
                      name="date"
                      placeholderText="Start date"
                      style="select"
                      selected={date}
                      onChange={handleDate}
                    />
                  </Col>

                  <Col xs={5} md={2} lg={2} className="text-end">
                    <div className="d-flex align-items-center justify-content-center">
                      <button type="submit" className="search-trip">
                        <div className="d-flex align-items-center jutify-content-center">
                          <SearchIcon className="seach-icon" /> <p>SEARCH</p>
                        </div>
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
