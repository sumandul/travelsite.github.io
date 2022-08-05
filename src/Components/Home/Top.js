import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Top = () => {
  return (
    <>
      <section className="top-destination pt-5">
        <h1 className="mb-4">
          <span>Top</span> Destinations
        </h1>
        <Container>
          <Row className="gy-4">
            <Col md={6} lg={4}>
              <div className="dist-box">
                <Link to={'/everest'}>
                  <div className="img-box">
                    <img
                      src="https://media-cdn.tripadvisor.com/media/photo-s/0d/65/06/f7/the-main-maya-devi-temple.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title-place">
                      <h2> NEPAL</h2>
                      <span>207 of HOliday Package</span>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <Link to={'/everest'}>
                <div className="dist-box">
                  <div className="img-box">
                    <img
                      src="https://imageio.forbes.com/blogs-images/tmullen/files/2018/02/IMG_0675-1200x897.jpg?format=jpg&width=1200"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title-place">
                      <h2> Butan</h2>
                      <span>207 of HOliday Package</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col md={6} lg={4}>
              <Link to={'/'}>
                <div className="dist-box">
                  <div className="img-box">
                    <img
                      src="https://www.globaltimes.cn/Portals/0/attachment/2020/2020-12-27/4a98f80e-00de-49ff-b025-34f53d1d1496.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="title-place">
                      <h2>Tibeat</h2>
                      <span>207 of HOliday Package</span>
                    </div>
                  </div>
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
