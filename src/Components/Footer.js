import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'
const Footer = () => {
  const [down, setDown] = useState(false)
  const [arrow, setArrow] = useState('')
  return (
    <>
      <footer>
        <div className="footer">
          <Container>
            <Row>
              <Col md={6} lg={3}>
                <h1>Zero Degree Tour Pvt. Ltd</h1>
                <ul className="mt-4">
                  <li>Phone: +977 1 4252366 </li>
                  <li>Cell: +977-9844216449 </li>
                  <li>Email: info@zerodegree.com</li>
                  <li>Address: Chetrapati, Chowk, </li>
                  <li>thamel, Kathmandu, Nepal.</li>
                </ul>
                <div className="icon-container ">
                  <div className="social-nedia-icon ms-0">
                    <Link to={'/everest'}>
                      <div className="icon-box">
                        <WhatsAppIcon />
                      </div>
                    </Link>
                  </div>
                  <div className="social-nedia-icon">
                    <Link to={''}>
                      <div className="icon-box">
                        <YouTubeIcon />
                      </div>
                    </Link>
                  </div>
                  <div className="social-nedia-icon">
                    <Link to={''}>
                      <div className="icon-box">
                        <TwitterIcon />
                      </div>
                    </Link>
                  </div>
                  <div className="social-nedia-icon">
                    <Link to={''}>
                      <div className="icon-box">
                        <InstagramIcon />
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="inquery-form">
                  <h1>Inquiry Form </h1>
                  <form action="" className="mt-4 ">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="foot-input"
                    />
                    <input
                      type="text"
                      placeholder="Phone no."
                      className="foot-input"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="foot-input"
                    />
                    <textarea
                      name=""
                      id=""
                      cols="10"
                      rows="4"
                      placeholder="Message"
                      className="foot-input"
                    ></textarea>
                    <button className="btn-send mt-1">
                      Send
                      <EastOutlinedIcon className="ms-2 right-arr" />
                    </button>
                  </form>
                </div>
                <div className="mb-query">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        onClick={() => {
                          setDown(!down)
                          setArrow('first')
                        }}
                      >
                        Inquiry Form{' '}
                        <KeyboardArrowDownIcon
                          className={
                            down === true && arrow === 'first'
                              ? 'rotate down'
                              : 'down'
                          }
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        <form action="" className="mt-4">
                          <input
                            type="text"
                            placeholder="Your name"
                            className="foot-input"
                          />
                          <input
                            type="text"
                            placeholder="Phone no."
                            className="foot-input"
                          />
                          <input
                            type="text"
                            placeholder="Email"
                            className="foot-input"
                          />
                          <textarea
                            name=""
                            id=""
                            cols="10"
                            rows="4"
                            placeholder="Message"
                            className="foot-input"
                          ></textarea>
                          <button className="btn-send">
                            Send
                            <EastOutlinedIcon className="ms-2" />
                          </button>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="inquery-form">
                  <h1>Info Page</h1>
                  <ul className="mt-4">
                    <li>
                      <Link to={'/'}> Home</Link>{' '}
                    </li>

                    <li>
                      <Link to={''}>About Us</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Our Team </Link>
                    </li>
                    <li>
                      <Link to={''}>CSR</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Terms & Conditions </Link>
                    </li>
                    <li>
                      <Link to={''}>Make a Payment</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Why Us?</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Gallery</Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-query">
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        onClick={() => {
                          setDown(!down)
                          setArrow('second')
                        }}
                      >
                        Info Page
                        <KeyboardArrowDownIcon
                          className={
                            down === true && arrow === 'second'
                              ? 'rotate down'
                              : 'down'
                          }
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="mt-4">
                          <li>
                            <Link to={'/'}> Home</Link>{' '}
                          </li>

                          <li>
                            <Link to={''}>About Us</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Our Team </Link>
                          </li>
                          <li>
                            <Link to={''}>CSR</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Terms & Conditions </Link>
                          </li>
                          <li>
                            <Link to={''}>Make a Payment</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Why Us?</Link>{' '}
                          </li>
                          <li>
                            <Link to={''}>Gallery</Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="travel-info ">
                  <ul className="mt-5">
                    <li>
                      <Link to={''}>Travel Info</Link>{' '}
                    </li>
                    <li>
                      <Link to={''}>Blog </Link>
                    </li>
                    <li>
                      <Link to={''}>Best Deals </Link>
                    </li>
                    <li>
                      <Link to={''}>Contact Us </Link>
                    </li>
                    <li>
                      {' '}
                      <Link to={''}>FAQs </Link>
                    </li>
                    <li>
                      <Link to={''}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="brand-section">
          <Container>
            <div className="brand">
              <Row>
                <Col xs={6} md={8}>
                  <span className="mb-4">We accept</span>
                  <Row className="gy-3">
                    <Col md={2}>
                      <Link to={''}>
                        <img
                          src="https://www.travel2riga.com/images/uploaded/MasterCard_Logo.png"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </Col>
                    <Col md={2}>
                      <Link to={''}>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </Col>
                    <Col md={2}>
                      <Link to={''}>
                        <img
                          src="hhttps://d28wu8o6itv89t.cloudfront.net/images/amexlogopng-1578907833580.png"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </Col>
                    <Col md={2}>
                      <Link to={''}>
                        <img
                          src="hhttps://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} md={4}>
                  <span>IT PARTNEER </span>
                  <div>
                    <img
                      src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/291238519_3263705963914928_1592418732423195036_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HPfApGBkErIAX-L0BIv&_nc_ht=scontent.fktm3-1.fna&oh=00_AT-V7qjV21A5npfTXqT2tT6LbRGq-5tdRI8i8HIZ2imVbQ&oe=62DD08E8"
                      alt=""
                      style={{ width: '50px' }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className="bottom">
          <Container>
            <div className="footer-bottom">
              <h3>
                All Contents & Photographs Copyright © by Zero Degree Tour and
                Travel Pvt. Ltd
              </h3>
            </div>
          </Container>
        </section>
      </footer>
    </>
  )
}

export default Footer
