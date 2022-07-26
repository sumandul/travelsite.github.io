import React, { useState } from 'react'

import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
const Header = () => {
  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if (window.scrollY >= 150) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)
  return (
    <>
      <header>
        <div className="innr-top">
          <Container>
            <div className="header-top">
              <marquee>
                <h1>
                  Nepal Trek Booking Open For 2022 <span></span> 23
                </h1>
              </marquee>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mid-header">
            <Row>
              <Col md={6}>
                <div className="logo">
                  <Link to={'/'}>
                    {' '}
                    <img src="../Logo.png" alt="" className="img-fluid" />
                  </Link>
                </div>
              </Col>
              <Col md={3}>
                <div className="email">
                  <div className="iocon">
                    <AlternateEmailOutlinedIcon className="icon" />
                  </div>
                  <div className="contENT ms-1">
                    <span>Quick Questions? Email Us</span>
                    <h5>(dulalsuman853@gmail.com)</h5>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="email">
                  <div className="iocon">
                    <WhatsappOutlinedIcon className="icon" />
                  </div>
                  <div className="contENT ms-1">
                    <span>Direct Talk to an Expert</span>
                    <h5>(+977-9803577164)</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className={fix ? 'fix-menu' : 'menu'}>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <div className="logo mb-logo">
                <img src="../Logo.png" alt="" className="img-fluid" />
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <MenuIcon className=" MenuIcon" />
                {/* <span class="navbar-toggler-icon"></span> */}
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link
                      class="nav-link active ps-0"
                      aria-current="page"
                      to={'/'}
                    >
                      HOME
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to={'/trip'}
                    >
                      ALL PACKAGE
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      DAY TOUR
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      BEST DEALS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      TRAVEL INFO
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      ABOUT US
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      HOME
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      BLOG
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      REVIEW
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
