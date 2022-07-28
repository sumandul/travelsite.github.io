import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactStar from 'react-rating-stars-component'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'

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
        <Container className="sss">
          <Row className="gy-5">
            <Col md={6} lg={4}>
              <div className="feature-box">
                <div className="feature-img">
                  <img
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                    alt=""
                  />
                  <button className="feature-btn">FEATURED</button>
                  <div className="feature-content">
                    <div className="star d-flex align-item-center justify-content-between">
                      <div className="star-box d-flex align-item-center justiy-content-center">
                        <ReactStar {...options} />
                        <span className="mt-2 ms-1">4.5</span>
                      </div>
                      <div className="feature-icon d-flex">
                        <div className="box-cover">
                          <FilterOutlinedIcon className="icon-top " />
                          <div className="box">1</div>
                        </div>
                        <div>
                          <VideocamOutlinedIcon className="icon-top ms-3 " />
                        </div>
                      </div>
                    </div>

                    <div className="tour-title">
                      <h2>Phokara Valley Tour</h2>
                    </div>
                    <span>From $50</span>
                    <span className="cross"> $58 </span>

                    <div className="tour-explor d-flex align-items-center justify-content-between">
                      <div className="icon-text">
                        <AccessTimeOutlinedIcon className="icon" /> 10days
                        <PeopleAltOutlinedIcon className="icon" /> 10
                      </div>
                      <span>
                        {' '}
                        Explore <EastOutlinedIcon />
                      </span>
                      {/* <button className="">
                      
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <div className="feature-img">
                  <img
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                    alt=""
                  />
                  <button className="feature-btn">FEATURE</button>
                  <div className="feature-content">
                    <div className="star d-flex align-item-center justify-content-between">
                      <div className="star-box d-flex align-item-center justiy-content-center">
                        <ReactStar {...options} />{' '}
                        <span className="mt-2 ms-1">4.5</span>
                      </div>
                      <div className="feature-icon d-flex">
                        <div className="box-cover">
                          {' '}
                          <FilterOutlinedIcon className="icon-top " />
                          <div className="box">1</div>
                        </div>
                        <div>
                          <VideocamOutlinedIcon className="icon-top ms-3 " />
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
                      <span>
                        Explore <EastOutlinedIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <div className="feature-img">
                  <img
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                    alt=""
                  />
                  <button className="feature-btn">FEATURE</button>
                  <div className="feature-content">
                    <div className="star d-flex align-item-center justify-content-between">
                      <div className="star-box d-flex align-item-center justiy-content-center">
                        <ReactStar {...options} />{' '}
                        <span className="mt-2 ms-1">4.5</span>
                      </div>
                      <div className="feature-icon d-flex">
                        <div className="box-cover">
                          {' '}
                          <FilterOutlinedIcon className="icon-top " />
                          <div className="box">1</div>
                        </div>
                        <div>
                          <VideocamOutlinedIcon className="icon-top ms-3 " />
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
                      <span>
                        Explore <EastOutlinedIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <div className="feature-img">
                  <img
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                    alt=""
                  />
                  <button className="feature-btn">FEATURE</button>
                  <div className="feature-content">
                    <div className="star d-flex align-item-center justify-content-between">
                      <div className="star-box d-flex align-item-center justiy-content-center">
                        <ReactStar {...options} />{' '}
                        <span className="mt-2 ms-1">4.5</span>
                      </div>
                      <div className="feature-icon d-flex">
                        <div className="box-cover">
                          {' '}
                          <FilterOutlinedIcon className="icon-top " />
                          <div className="box">1</div>
                        </div>
                        <div>
                          <VideocamOutlinedIcon className="icon-top ms-3 " />
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
                      <span>
                        Explore <EastOutlinedIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <div className="feature-img">
                  <img
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                    alt=""
                  />
                  <button className="feature-btn">FEATURE</button>
                  <div className="feature-content">
                    <div className="star d-flex align-item-center justify-content-between">
                      <div className="star-box d-flex align-item-center justiy-content-center">
                        <ReactStar {...options} />{' '}
                        <span className="mt-2 ms-1">4.5</span>
                      </div>
                      <div className="feature-icon d-flex">
                        <div className="box-cover">
                          {' '}
                          <FilterOutlinedIcon className="icon-top " />
                          <div className="box">1</div>
                        </div>
                        <div>
                          <VideocamOutlinedIcon className="icon-top ms-3 " />
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
                      <span>
                        Explore <EastOutlinedIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-box">
                <div className="feature-img">
                  <img
                    src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/96/67/56.jpg"
                    alt=""
                  />
                  <button className="feature-btn">FEATURE</button>
                  <div className="feature-content">
                    <div className="star d-flex align-item-center justify-content-between">
                      <div className="star-box d-flex align-item-center justiy-content-center">
                        <ReactStar {...options} />{' '}
                        <span className="mt-2 ms-1">4.5</span>
                      </div>
                      <div className="feature-icon d-flex">
                        <div className="box-cover">
                          {' '}
                          <FilterOutlinedIcon className="icon-top " />
                          <div className="box">1</div>
                        </div>
                        <div>
                          <VideocamOutlinedIcon className="icon-top ms-3 " />
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
                      <span>
                        Explore <EastOutlinedIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Feature
