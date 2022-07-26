import React, { useEffect } from 'react'
import SkateboardingIcon from '@mui/icons-material/Skateboarding'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import HikingIcon from '@mui/icons-material/Hiking'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ReactStar from 'react-rating-stars-component'
import { useAnimation, motion } from 'framer-motion'
import { InView, useInView } from 'react-intersection-observer'
const Booking = () => {
  const options = {
    edit: false,
    color: '#fb8500',
    activeColor: '#fb8500',
    value: 5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 46,
  }
  const { ref, inView } = useInView()
  console.log(inView, 'yui')
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      })
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      })
    }
  }, [InView])
  return (
    <>
      <section className="booking">
        <div className="content pt-5">
          <div>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="circle">
                <HikingIcon className="hike-icon" />
              </div>
            </div>
            <h1>Mount Everest base camp</h1>
            <h2 className="text-center">Heli Tour</h2>
            <div className="tour mt-4">
              <div className="d-flex align-items-center">
                <SkateboardingIcon className="icon-tour" />{' '}
                <div>
                  <span>Grade</span> <p>challenging</p>
                </div>
              </div>
              <div className="d-flex align-items-center ">
                <AccessTimeIcon className="icon-tour" />{' '}
                <div>
                  <span>Duration</span> <p>5 Hours</p>
                </div>
              </div>
              <div className="d-flex align-items-center ">
                <HikingIcon className="icon-tour" />{' '}
                <div>
                  <span>Activity</span> <p>Everest Heli View</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="price me-3 ">
                  <AttachMoneyIcon className="icon-tou me-0" />
                </div>
                <div>
                  <span className="d-price">From US$ 1500</span> <p>US$1000</p>
                </div>
              </div>
            </div>
            <div className="star d-flex align-items-center justify-content-center mt-4 ">
              <ReactStar {...options} />{' '}
              <span className="ms-4">of 60 review</span>
            </div>
            <div className="book-btn d-flex align-items-center justify-content-center  mt-4">
              <button className="btn">Booking Today</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Booking
