import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactStar from 'react-rating-stars-component'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import { Link } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East'

import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
const Feature = () => {
  const options = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#FB8500',
    value: 4.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 26,
  }
  return (
    <>
      <section className="feature ">
        <h1 className="text-center mb-4">Feature Holidays Package</h1>
        <Container className="">
          <Row className="">
            <Col md={6} lg={4}>
              <div className="feature-box">
                <Link to={'/everest'}>
                  <div className="feature-img">
                    <img
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">FEATURE</button>
                    <div className="feature-content">
                      <div className="star d-flex align-item-center justify-content-between">
                        <div className="star-box d-flex align-item-center justiy-content-center">
                          <ReactStar {...options} />{' '}
                          <span className="mt-2 ms-1">4.5</span>
                        </div>
                        <div className="feature-icon d-flex">
                          <Link to={'/everest'}>
                            <div className="box-cover">
                              <FilterOutlinedIcon className="icon-top " />
                              <div className="box">1</div>
                            </div>
                          </Link>
                          <div>
                            <Link to={''}>
                              <VideocamOutlinedIcon className="icon-top ms-3 " />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="tour-title">
                        <h2>Phokara Valley Tour</h2>
                      </div>
                      <span>From $50</span>
                      <span className="cross"> $58 </span>

                      <div className="tour-explor d-flex align-items-center justify-content-between">
                        <div className="icon-text d-flex">
                          <div>
                            {' '}
                            <AccessTimeOutlinedIcon className="icon" /> 10days{' '}
                          </div>
                          <div className="ms-4">
                            {' '}
                            <PeopleAltOutlinedIcon className="icon" /> 10
                          </div>
                        </div>
                        <Link to={'/everest'}>
                          <span>
                            Explore <EastOutlinedIcon />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <Link to={'/everest'}>
                  <div className="feature-img">
                    <img
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">FEATURE</button>
                    <div className="feature-content">
                      <div className="star d-flex align-item-center justify-content-between">
                        <div className="star-box d-flex align-item-center justiy-content-center">
                          <ReactStar {...options} />{' '}
                          <span className="mt-2 ms-1">4.5</span>
                        </div>
                        <div className="feature-icon d-flex">
                          <Link to={'/everest'}>
                            <div className="box-cover">
                              <FilterOutlinedIcon className="icon-top " />
                              <div className="box">1</div>
                            </div>
                          </Link>
                          <div>
                            <Link to={''}>
                              <VideocamOutlinedIcon className="icon-top ms-3 " />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="tour-title">
                        <Link to={'/everest'}>
                          <h2>Phokara Valley Tour</h2>
                        </Link>
                      </div>
                      <span>From $50</span>
                      <span className="cross"> $58 </span>

                      <div className="tour-explor d-flex align-items-center justify-content-between">
                        <div className="icon-text d-flex">
                          <div>
                            {' '}
                            <AccessTimeOutlinedIcon className="icon" /> 10days{' '}
                          </div>
                          <div className="ms-4">
                            {' '}
                            <PeopleAltOutlinedIcon className="icon" /> 10
                          </div>
                        </div>
                        <Link to={'/everest'}>
                          <span>
                            Explore <EastOutlinedIcon />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <Link to={'/everest'}>
                  <div className="feature-img">
                    <img
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">FEATURE</button>
                    <div className="feature-content">
                      <div className="star d-flex align-item-center justify-content-between">
                        <div className="star-box d-flex align-item-center justiy-content-center">
                          <ReactStar {...options} />{' '}
                          <span className="mt-2 ms-1">4.5</span>
                        </div>
                        <div className="feature-icon d-flex">
                          <Link to={'/everest'}>
                            <div className="box-cover">
                              <FilterOutlinedIcon className="icon-top " />
                              <div className="box">1</div>
                            </div>
                          </Link>
                          <div>
                            <Link to={''}>
                              <VideocamOutlinedIcon className="icon-top ms-3 " />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="tour-title">
                        <h2>Phokara Valley Tour</h2>
                      </div>
                      <span>From $50</span>
                      <span className="cross"> $58 </span>

                      <div className="tour-explor d-flex align-items-center justify-content-between">
                        <div className="icon-text d-flex">
                          <div>
                            {' '}
                            <AccessTimeOutlinedIcon className="icon" /> 10days{' '}
                          </div>
                          <div className="ms-4">
                            {' '}
                            <PeopleAltOutlinedIcon className="icon" /> 10
                          </div>
                        </div>
                        <Link to={'/everest'}>
                          <span>
                            Explore <EastOutlinedIcon />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <Link to={'/everest'}>
                  <div className="feature-img">
                    <img
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">FEATURE</button>
                    <div className="feature-content">
                      <div className="star d-flex align-item-center justify-content-between">
                        <div className="star-box d-flex align-item-center justiy-content-center">
                          <ReactStar {...options} />{' '}
                          <span className="mt-2 ms-1">4.5</span>
                        </div>
                        <div className="feature-icon d-flex">
                          <Link to={'/everest'}>
                            <div className="box-cover">
                              <FilterOutlinedIcon className="icon-top " />
                              <div className="box">1</div>
                            </div>
                          </Link>
                          <div>
                            <Link to={''}>
                              <VideocamOutlinedIcon className="icon-top ms-3 " />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="tour-title">
                        <h2>Phokara Valley Tour</h2>
                      </div>
                      <span>From $50</span>
                      <span className="cross"> $58 </span>

                      <div className="tour-explor d-flex align-items-center justify-content-between">
                        <div className="icon-text d-flex">
                          <div>
                            {' '}
                            <AccessTimeOutlinedIcon className="icon" /> 10days{' '}
                          </div>
                          <div className="ms-4">
                            {' '}
                            <PeopleAltOutlinedIcon className="icon" /> 10
                          </div>
                        </div>
                        <Link to={'/everest'}>
                          <span>
                            Explore <EastOutlinedIcon />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <Link to={'/everest'}>
                  <div className="feature-img">
                    <img
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">FEATURE</button>
                    <div className="feature-content">
                      <div className="star d-flex align-item-center justify-content-between">
                        <div className="star-box d-flex align-item-center justiy-content-center">
                          <ReactStar {...options} />{' '}
                          <span className="mt-2 ms-1">4.5</span>
                        </div>
                        <div className="feature-icon d-flex">
                          <Link to={'/everest'}>
                            <div className="box-cover">
                              <FilterOutlinedIcon className="icon-top " />
                              <div className="box">1</div>
                            </div>
                          </Link>
                          <div>
                            <Link to={''}>
                              <VideocamOutlinedIcon className="icon-top ms-3 " />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="tour-title">
                        <h2>Phokara Valley Tour</h2>
                      </div>
                      <span>From $50</span>
                      <span className="cross"> $58 </span>

                      <div className="tour-explor d-flex align-items-center justify-content-between">
                        <div className="icon-text d-flex">
                          <div>
                            {' '}
                            <AccessTimeOutlinedIcon className="icon" /> 10days{' '}
                          </div>
                          <div className="ms-4">
                            {' '}
                            <PeopleAltOutlinedIcon className="icon" /> 10
                          </div>
                        </div>
                        <Link to={'/everest'}>
                          <span>
                            Explore <EastOutlinedIcon />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <Link to={'/everest'}>
                  <div className="feature-img">
                    <img
                      src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">FEATURE</button>
                    <div className="feature-content">
                      <div className="star d-flex align-item-center justify-content-between">
                        <div className="star-box d-flex align-item-center justiy-content-center">
                          <ReactStar {...options} />{' '}
                          <span className="mt-2 ms-1">4.5</span>
                        </div>
                        <div className="feature-icon d-flex">
                          <Link to={'/everest'}>
                            <div className="box-cover">
                              <FilterOutlinedIcon className="icon-top " />
                              <div className="box">1</div>
                            </div>
                          </Link>
                          <div>
                            <Link to={''}>
                              <VideocamOutlinedIcon className="icon-top ms-3 " />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="tour-title">
                        <h2>Phokara Valley Tour</h2>
                      </div>
                      <span>From $50</span>
                      <span className="cross"> $58 </span>

                      <div className="tour-explor d-flex align-items-center justify-content-between">
                        <div className="icon-text d-flex">
                          <div>
                            {' '}
                            <AccessTimeOutlinedIcon className="icon" /> 10days{' '}
                          </div>
                          <div className="ms-4">
                            {' '}
                            <PeopleAltOutlinedIcon className="icon" /> 10
                          </div>
                        </div>
                        <Link to={'/everest'}>
                          <span>
                            Explore <EastOutlinedIcon />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="more-feature">
            <Link to={'/view'}>
              <button className="vew-more">
                view more <EastIcon className="right-arr" />
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Feature
