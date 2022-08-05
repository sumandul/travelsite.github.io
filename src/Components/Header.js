import React, { useState } from 'react'

import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
const Header = () => {
  const [fix, setFix] = useState(false)
  const [closemenu, setOpenMenu] = useState(false)
  const [menu, setMenu] = useState('')
  const [sideMenu, setSideMenu] = useState(false)
  console.log(closemenu)
  const setFixed = () => {
    if (window.scrollY >= 150) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)
  const togggleMenu = () => {
    setSideMenu(!sideMenu)
  }

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
                    <Link to={'/'}>
                      <h5>(dulalsuman853@gmail.com)</h5>
                    </Link>
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
                onClick={togggleMenu}
              >
                {sideMenu ? (
                  <CloseIcon className=" MenuIcon" />
                ) : (
                  <MenuIcon className=" MenuIcon" />
                )}
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
                  <li
                    class="nav-item"
                    onMouseEnter={() => {
                      setOpenMenu(true)
                      setMenu('first')
                    }}
                    onMouseLeave={() => setOpenMenu(false)}
                  >
                    <Link
                      class="nav-link active d-flex "
                      aria-current="page"
                      to={'/trip'}
                    >
                      ALL PACKAGE
                      <KeyboardArrowDownOutlinedIcon
                        className={
                          closemenu === true && menu === 'first' && 'rotateIcon'
                        }
                      />
                    </Link>
                    {closemenu === true && menu === 'first' && (
                      <div className="drop-menu">
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li
                    class="nav-item"
                    onMouseOver={() => {
                      setOpenMenu(true)
                      setMenu('second')
                    }}
                    onMouseLeave={() => setOpenMenu(false)}
                  >
                    <Link
                      class="nav-link active d-flex "
                      aria-current="page"
                      to={''}
                    >
                      DAY TOUR
                      <KeyboardArrowDownOutlinedIcon
                        className={
                          closemenu === true &&
                          menu === 'second' &&
                          'rotateIcon'
                        }
                      />
                    </Link>
                    {closemenu === true && menu === 'second' && (
                      <div className="drop-menu">
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li
                    class="nav-item"
                    onMouseOver={() => {
                      setOpenMenu(true)
                      setMenu('fourth')
                    }}
                    onMouseLeave={() => setOpenMenu(false)}
                  >
                    <a
                      class="nav-link active d-flex"
                      aria-current="page"
                      href="#"
                    >
                      BEST DEALS
                      <KeyboardArrowDownOutlinedIcon
                        className={
                          closemenu === true &&
                          menu === 'fourth' &&
                          'rotateIcon'
                        }
                      />
                    </a>
                    {closemenu === true && menu === 'fourth' && (
                      <div className="drop-menu">
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li
                    class="nav-item"
                    onMouseOver={() => {
                      setOpenMenu(true)
                      setMenu('third')
                    }}
                    onMouseLeave={() => setOpenMenu(false)}
                  >
                    <a class="nav-link active" aria-current="page" href="#">
                      TRAVEL INFO
                    </a>
                    {closemenu === true && menu === 'third' && (
                      <div className="drop-menu">
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                        <li>
                          <Link to={''}>Home</Link>
                        </li>
                      </div>
                    )}
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
