import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Row, Col } from 'react-bootstrap'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import StarIcon from '@mui/icons-material/Star'
const SliderComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className="slide">
        <Container className="mt-5">
          <h1 className="text-center mb-2">Most Popular Trekking</h1>
          <Slider {...settings}>
            <div className="top-place">
              <div className="img-box">
                <img
                  src="https://mountainroutes.com/wp-content/webp-express/webp-images/uploads/2020/11/Gosaikunda-trek-1-e1610123261328.jpg.webp"
                  className="img-fluid"
                  alt=""
                />
                <div className="top-btn">
                  <StarIcon className="me-1" /> BEST PRICE
                </div>
                <div className="over-box">
                  <span className="me-5">
                    <AccessTimeOutlinedIcon className="time-icon" /> 17days
                  </span>{' '}
                  <span>$2300</span>
                </div>
              </div>
              <div className="content">
                <h3 className="text-center ">Gosikunda Lake</h3>
                <Row className="mt-4">
                  <Col md={6}>
                    <button className="rd-btn ms-2">
                      <span>Read Details</span>
                      <EastOutlinedIcon className="arrow ms-3" />
                    </button>
                  </Col>
                  <Col md={6}>
                    <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                      <div className="box-cover">
                        {' '}
                        <FilterOutlinedIcon className="icon-top" />
                        <div className="box">1</div>
                      </div>
                      <div>
                        <VideocamOutlinedIcon className="icon-top ms-4" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="top-place">
              <div className="img-box">
                <img
                  src="https://mountainroutes.com/wp-content/webp-express/webp-images/uploads/2020/11/Gosaikunda-trek-1-e1610123261328.jpg.webp"
                  className="img-fluid"
                  alt=""
                />
                <div className="top-btn">
                  <StarIcon className="me-1" /> BEST PRICE
                </div>
                <div className="over-box">
                  <span className="me-5">
                    <AccessTimeOutlinedIcon className="time-icon" /> 17days
                  </span>{' '}
                  <span>$2300</span>
                </div>
              </div>
              <div className="content ">
                <h3 className="text-center">Gosikunda Lake</h3>
                <Row className="mt-4">
                  <Col md={6}>
                    <button className="rd-btn ms-2">
                      <span>Read Details</span>
                      <EastOutlinedIcon className="arrow ms-3" />
                    </button>
                  </Col>
                  <Col md={6}>
                    <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                      <div className="box-cover">
                        {' '}
                        <FilterOutlinedIcon className="icon-top" />
                        <div className="box">1</div>
                      </div>
                      <div>
                        <VideocamOutlinedIcon className="icon-top ms-4" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="top-place">
              <div className="img-box">
                <img
                  src="https://mountainroutes.com/wp-content/webp-express/webp-images/uploads/2020/11/Gosaikunda-trek-1-e1610123261328.jpg.webp"
                  className="img-fluid"
                  alt=""
                />
                <div className="top-btn">
                  <StarIcon className="me-1" /> BEST PRICE
                </div>
                <div className="over-box">
                  <span className="me-5">
                    <AccessTimeOutlinedIcon className="time-icon" /> 17days
                  </span>{' '}
                  <span>$2300</span>
                </div>
              </div>
              <div className="content">
                <h3 className="text-center ">Gosikunda Lake</h3>
                <Row className="mt-4">
                  <Col md={6}>
                    <button className="rd-btn ms-2">
                      <span>Read Details</span>
                      <EastOutlinedIcon className="arrow ms-3" />
                    </button>
                  </Col>
                  <Col md={6}>
                    <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                      <div className="box-cover">
                        {' '}
                        <FilterOutlinedIcon className="icon-top" />
                        <div className="box">1</div>
                      </div>
                      <div>
                        <VideocamOutlinedIcon className="icon-top ms-4" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  )
}

export default SliderComponent
