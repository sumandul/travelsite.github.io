import React, { useState } from 'react'

import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import MenuItem from './MenuItem'
import { menuItems } from '../header/MenuList'
const Header = () => {
  const depthLevel = 0
  console.log(menuItems)
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
              <h1>
                Nepal Trek Booking Open For 2022 <span></span> 23
              </h1>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mid-header">
            <Row>
              <Col md={6}>
                <div className="logo ">
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
                  {menuItems.map((menu, index) => {
                    return (
                      <MenuItem
                        menu={menu}
                        key={index}
                        depthLevel={depthLevel}
                      />
                    )
                  })}
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
