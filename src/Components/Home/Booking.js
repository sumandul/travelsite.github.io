import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SkateboardingIcon from '@mui/icons-material/Skateboarding'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import HikingIcon from '@mui/icons-material/Hiking'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ReactStar from 'react-rating-stars-component'
import { useAnimation, motion, AnimatePresence } from 'framer-motion'
import { InView, useInView } from 'react-intersection-observer'
import { useScroll } from '../UseScroll'
import { testimonialsAnimations } from '../../animation/Animation'
const Booking = () => {
  const options = {
    edit: false,
    color: '#fb8500',
    activeColor: '#fb8500',
    value: 5,
    isHalf: true,
    size: window.innerWidth < 600 ? 30 : 46,
  }
  const [element, controls] = useScroll()

  return (
    <>
      <section className="booking" ref={element}>
        <motion.div
          className="content pt-3"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.1,
            type: 'tween',
            duration: 0.8,
          }}
        >
          <div>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="circle">
                <HikingIcon className="hike-icon" />
              </div>
            </div>
            <h1 className="mt-4">Mount Everest base camp</h1>
            <h2 className="text-center mt-4">Heli Tour</h2>
            <div className=" d-flex justify-content-center align-items-center mt-4">
              <div>
                <div className="tour">
                  <div className="d-flex align-items-center">
                    <SkateboardingIcon className="icon-tour" />
                    <div>
                      <span>Grade</span> <p>challenging</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center  event-type">
                    <AccessTimeIcon className="icon-tour" />{' '}
                    <div>
                      <span>Duration</span> <p>5 Hours</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center event-type ">
                    <HikingIcon className="icon-tour" />{' '}
                    <div>
                      <span>Activity</span> <p>Everest Heli View</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center event-type">
                    <div className="price me-3 ">
                      <AttachMoneyIcon className="icon-tou me-0" />
                    </div>
                    <div>
                      <span className="d-price">From US$ 1500</span>{' '}
                      <p>US$1000</p>
                    </div>
                  </div>
                </div>
                <div className="star d-flex align-items-center justify-content-center mt-4 ">
                  <ReactStar {...options} />{' '}
                  <span className="ms-4">of 60 review</span>
                </div>
                <div className="book-btn d-flex align-items-center justify-content-center  mt-4">
                  <Link to={'/everest'}>
                    <button className="btn">Booking Today</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Booking
