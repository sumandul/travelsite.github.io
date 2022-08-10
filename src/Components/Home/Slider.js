import React, { useState } from 'react'
import Slider from 'react-slick'
import OwlCarousel from 'react-owl-carousel'
import { Container, Row, Col } from 'react-bootstrap'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import PopUpModel from '../reuableComponent/PopUpModel'
import ReactImageMagnify from 'react-image-magnify'
import ImageList from '../Home/ImageList'
import Vedio from './Vedio'

const SliderComponent = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: 10,
  //   speed: 500,
  //   slidesToShow: 2,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // }
  const [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(!isOpen)
  }
  const [show, setShow] = useState(false)
  const [showvideo, setShowVideo] = useState(false)
  const [modal, setModal] = useState('image')
  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

  const handleCloseVideo = () => setShowVideo(false)
  const options = {
    margin: 15,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  }

  return (
    <>
      <PopUpModel
        show={show}
        handleclose={handleClose}
        header="Gosikunda Trek "
        body={<ImageList />}
        className="img-popup"
      />
      <PopUpModel
        show={showvideo}
        handleclose={handleCloseVideo}
        header="Gosikunda Trek Vedio "
        body={<Vedio />}
        className="img-popup"
      />
      <section className="slide">
        <Container className="mt-5">
          <h1 className="text-center mb-2">Most Popular Trekking</h1>
          <OwlCarousel className="owl-theme top-place-carsouel" {...options}>
            <div className="top-place">
              <div className="img-box">
                <Link to={'/everest'}>
                  <img
                    src="https://www.gokyotreksnepal.com/wp-content/uploads/2019/06/gosaikunda-lake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="top-btn">
                  <StarIcon className="me-1" /> BEST PRICE
                </div>
                <div className="over-box">
                  <div className="over-box-content">
                    <span className="me-5">
                      <AccessTimeOutlinedIcon className="time-icon" /> 17days
                    </span>{' '}
                    <span>$2300</span>
                  </div>
                </div>
              </div>
              <div className="content">
                <Link to={'/everest'}>
                  <h3 className="text-center ">Gosikunda Lake</h3>
                </Link>
                <Row className="mt-4">
                  <Col xs={8} md={8} lg={6}>
                    <Link to={'/everest'}>
                      <button className="rd-btn ms-2">
                        <span>Read Details</span>
                        <EastOutlinedIcon className="arrow ms-3" />
                      </button>
                    </Link>
                  </Col>
                  <Col xs={4} md={4} lg={6}>
                    <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                      <div className="box-cover" onClick={handleShow}>
                        {' '}
                        <FilterOutlinedIcon className="icon-top" />
                        <div className="box">1</div>
                      </div>
                      <div
                        onClick={() => {
                          setShowVideo(true)
                        }}
                      >
                        <VideocamOutlinedIcon className="icon-top ms-4" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="top-place">
              <div className="img-box">
                <Link to={'/everest'}>
                  <img
                    src="https://www.gokyotreksnepal.com/wp-content/uploads/2019/06/gosaikunda-lake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="top-btn">
                  <StarIcon className="me-1" /> BEST PRICE
                </div>
                <div className="over-box">
                  <div className="over-box-content">
                    <span className="me-5">
                      <AccessTimeOutlinedIcon className="time-icon" /> 17days
                    </span>{' '}
                    <span>$2300</span>
                  </div>
                </div>
              </div>
              <div className="content">
                <Link to={'/everest'}>
                  <h3 className="text-center ">Gosikunda Lake</h3>
                </Link>
                <Row className="mt-4">
                  <Col xs={8} md={8} lg={6}>
                    <Link to={'/everest'}>
                      <button className="rd-btn ms-2">
                        <span>Read Details</span>
                        <EastOutlinedIcon className="arrow ms-3" />
                      </button>
                    </Link>
                  </Col>
                  <Col xs={4} md={4} lg={6}>
                    <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                      <div className="box-cover" onClick={handleShow}>
                        {' '}
                        <FilterOutlinedIcon className="icon-top" />
                        <div className="box">1</div>
                      </div>
                      <div
                        onClick={() => {
                          setShowVideo(true)
                        }}
                      >
                        <VideocamOutlinedIcon className="icon-top ms-4" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="top-place">
              <div className="img-box">
                <Link to={'/everest'}>
                  <img
                    src="https://www.gokyotreksnepal.com/wp-content/uploads/2019/06/gosaikunda-lake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="top-btn">
                  <StarIcon className="me-1" /> BEST PRICE
                </div>
                <div className="over-box">
                  <div className="over-box-content">
                    <span className="me-5">
                      <AccessTimeOutlinedIcon className="time-icon" /> 17days
                    </span>{' '}
                    <span>$2300</span>
                  </div>
                </div>
              </div>
              <div className="content">
                <Link to={'/everest'}>
                  <h3 className="text-center ">Gosikunda Lake</h3>
                </Link>
                <Row className="mt-4">
                  <Col xs={8} md={8} lg={6}>
                    <Link to={'/everest'}>
                      <button className="rd-btn ms-2">
                        <span>Read Details</span>
                        <EastOutlinedIcon className="arrow ms-3" />
                      </button>
                    </Link>
                  </Col>
                  <Col xs={4} md={4} lg={6}>
                    <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                      <div className="box-cover" onClick={handleShow}>
                        {' '}
                        <FilterOutlinedIcon className="icon-top" />
                        <div className="box">1</div>
                      </div>
                      <div
                        onClick={() => {
                          setShowVideo(true)
                        }}
                      >
                        <VideocamOutlinedIcon className="icon-top ms-4" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="top-place">
              <div className="img-box">
                <Link to={'/everest'}>
                  <img
                    src="https://www.gokyotreksnepal.com/wp-content/uploads/2019/06/gosaikunda-lake.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="top-btn">
                  <StarIcon className="me-1" /> BEST PRICE
                </div>
                <div className="over-box">
                  <div className="over-box-content">
                    <span className="me-5">
                      <AccessTimeOutlinedIcon className="time-icon" /> 17days
                    </span>{' '}
                    <span>$2300</span>
                  </div>
                </div>
              </div>
              <div className="content">
                <Link to={'/everest'}>
                  <h3 className="text-center ">Gosikunda Lake</h3>
                </Link>
                <Row className="mt-4">
                  <Col xs={8} md={8} lg={6}>
                    <Link to={'/everest'}>
                      <button className="rd-btn ms-2">
                        <span>Read Details</span>
                        <EastOutlinedIcon className="arrow ms-3" />
                      </button>
                    </Link>
                  </Col>
                  <Col xs={4} md={4} lg={6}>
                    <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                      <div className="box-cover" onClick={handleShow}>
                        {' '}
                        <FilterOutlinedIcon className="icon-top" />
                        <div className="box">1</div>
                      </div>
                      <div
                        onClick={() => {
                          setShowVideo(true)
                        }}
                      >
                        <VideocamOutlinedIcon className="icon-top ms-4" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </section>
    </>
  )
}

export default SliderComponent
