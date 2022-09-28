import React, { useEffect, useState } from 'react'

import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import MenuItem from './MenuItem'
import { menuItems } from '../header/MenuList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBanner } from '../../redux/Reducer'
import { fetchMenu } from '../../redux/Reducer'

const Header = () => {
  const dispatch = useDispatch()
  const data = useSelector((item) => item.bannerSetting.setting)
  const menuTitle = useSelector((item) => item.nav.menu.data)
  console.log(menuTitle, 'd')
  const depthLevel = 0
  const [fix, setFix] = useState(false)
  const [closemenu, setOpenMenu] = useState(false)
  const [menu, setMenu] = useState('')
  const [sideMenu, setSideMenu] = useState(false)
  const setFixed = () => {
    if (window.scrollY >= 150) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  useEffect(() => {
    dispatch(fetchBanner())
    dispatch(fetchMenu())
  }, [])
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
                  <Link to={'/home'}>
                    <img
                      src={window.baseURL + data.data?.logo}
                      alt=""
                      className="img-fluid"
                    />
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
                      <h5>({data?.data?.email})</h5>
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
                    <h5>({data?.data?.contact})</h5>
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
                  <li className=" nav-item ">
                    <Link
                      to={'/home'}
                      className=" nav-link active d-flex align-items-center mb-menu"
                    >
                      Home
                    </Link>
                  </li>
                  {menuTitle?.map((menu, index) => {
                    console.log(menu.name, ',emu')
                    return (
                      <MenuItem
                        menu={menu}
                        key={index}
                        depthLevel={depthLevel}
                      />
                    )
                  })}
                  <li className=" nav-item ">
                    <Link
                      to={'/blog'}
                      className=" nav-link active d-flex align-items-center mb-menu"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className=" nav-item ">
                    <Link
                      to={'/contact'}
                      className=" nav-link active d-flex align-items-center mb-menu"
                    >
                      Contact
                    </Link>
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
