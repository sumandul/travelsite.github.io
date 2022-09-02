import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion, variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useScroll } from '../UseScroll'
import { topPlaceContent } from '../../animation/Animation'
import { topDist } from '../../animation/Animation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopPlace } from '../../redux/Reducer'
import axios from 'axios'
const Top = () => {
  const { topDistination } = useSelector((data) => data.Tours)
  console.log(topDistination)
  const distpatch = useDispatch()
  useEffect(() => {
    distpatch(fetchTopPlace())

    const response = axios.get('api/topdestinations').then((data) => {
      return setDestination(data.data)
    })
  }, [])
  const [element, controls] = useScroll()
  const [destinations, setDestination] = useState()
  const animation = useAnimation()

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: '-200px',
      })
    }
  }, [inView])
  return (
    <>
      <section className="top-destination pt-5" ref={element}>
        <h1 className="mb-4">
          <span>Top</span> Destinations
        </h1>
        <Container>
          <Row className="gy-4">
            {destinations?.map((item) => {
              return (
                <Col md={6} lg={4} key={item.id}>
                  <div className="dist-box">
                    <Link to={`/destination/${item.slug}`}>
                      <motion.div
                        className="img-box"
                        variants={topDist}
                        animate={controls}
                        transition={{
                          duration: 0.8,
                        }}
                      >
                        <img
                          src={window.baseURL + item?.image}
                          alt=""
                          className="img-fluid"
                        />
                        <div className="top-dist-content">
                          <div className="title-place">
                            <motion.div
                              animate={controls}
                              variants={topPlaceContent}
                            >
                              <h2> {item.title}</h2>
                              <span>207 of HOliday Package</span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Top
