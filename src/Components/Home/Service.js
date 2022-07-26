import React, { useEffect } from 'react'
import SellIcon from '@mui/icons-material/Sell'
import ServiceContent from './ServiceContent'
import { Container, Col, Row } from 'react-bootstrap'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import { motion, variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { duration } from '@mui/material'
const serviceData = [
  {
    title: 'Best Price Guarantee',
    icon: <SellIcon className="service-icon sell" />,
    content:
      'There are many variations of but the majority have simply free text.',
  },
  {
    title: 'Easy & Quick Booking',
    icon: <BookOnlineIcon className="service-icon" />,
    content:
      'There are many variations of but the majority have simply free text.',
  },
  {
    title: 'Best Tour Selection',
    icon: <AirplanemodeActiveIcon className="service-icon plane" />,
    content:
      'There are many variations of but the majority have simply free text.',
  },
]

const Service = () => {
  const animation = useAnimation()

  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.3,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
      })
    }
    console.log(inView, 'view')
  }, [inView])
  return (
    <>
      <section className="service" ref={ref}>
        <Container>
          <motion.div animate={animation}>
            <Row className="gy-5">
              {serviceData.map((item) => {
                return (
                  <Col md={6} lg={4}>
                    <motion.div>
                      <ServiceContent
                        title={item.title}
                        icon={item.icon}
                        content={item.content}
                      />
                    </motion.div>
                  </Col>
                )
              })}
            </Row>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

export default Service
