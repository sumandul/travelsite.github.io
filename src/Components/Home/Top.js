import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion, variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useScroll } from '../UseScroll'
import { topDist } from '../../animation/Animation'
const Top = () => {
  const [element, controls] = useScroll()
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
            <Col md={6} lg={4}>
              <div className="dist-box">
                <Link to={'/everest'}>
                  <motion.div
                    className="img-box"
                    variants={topDist}
                    animate={controls}
                    transition={{
                      duration: 0.8,
                    }}
                  >
                    <img
                      src="https://media-cdn.tripadvisor.com/media/photo-s/0d/65/06/f7/the-main-maya-devi-temple.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="top-dist-content">
                      <div className="title-place">
                        <motion.div animate={animation}>
                          <h2> NEPAL</h2>
                          <span>207 of HOliday Package</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <Link to={'/everest'}>
                <div className="dist-box">
                  <motion.div
                    className="img-box"
                    variants={topDist}
                    animate={controls}
                    transition={{
                      duration: 0.8,
                    }}
                  >
                    <img
                      src="https://imageio.forbes.com/blogs-images/tmullen/files/2018/02/IMG_0675-1200x897.jpg?format=jpg&width=1200"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title-place">
                      <motion.div animate={animation} ref={ref}>
                        <h2> Butan</h2>
                        <span>207 of HOliday Package</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </Col>
            <Col md={6} lg={4}>
              <Link to={'/'}>
                <div className="dist-box">
                  <motion.div
                    className="img-box"
                    variants={topDist}
                    animate={controls}
                    transition={{
                      duration: 0.8,
                    }}
                  >
                    <img
                      src="https://www.globaltimes.cn/Portals/0/attachment/2020/2020-12-27/4a98f80e-00de-49ff-b025-34f53d1d1496.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title-place">
                      <mdiv>
                        <motion.div animate={animation} ref={ref}>
                          <h2>Tibeat</h2>
                          <span>207 of HOliday Package</span>
                        </motion.div>
                      </mdiv>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Top
