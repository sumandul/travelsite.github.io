import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Row, Col } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import ReactStar from 'react-rating-stars-component'
const ClintReview = () => {
  const options = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#FFBA00',
    value: 4.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 20,
  }
  const option = {
    margin: 10,
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
        items: 3,
      },
    },
  }
  return (
    <>
      <section className="slide-clint mt-5">
        <Container className="mt-5">
          <h1 className="text-center py-5">
            <span>Our happy</span> Clients
          </h1>
          <OwlCarousel className="owl-theme clint-review-carsouel" {...option}>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
          </OwlCarousel>
          {/* <Slider {...settings}>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
            <div className="clint-box">
              <div className="clint- d-flex">
                <div className="clint-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="clint-detail ms-2 mt-3">
                  <h3>Krishna Thapa</h3>
                  <span>Nepal</span>
                  <ReactStar {...options} />
                </div>
              </div>
              <p>
                Faucibus tristique felis potenti ultrices ornare rhoncus semper
                hac facilisi Rutrum tellus lorem sem velit nisi non pharetra in
                dui....
              </p>
            </div>
          </Slider> */}
        </Container>
      </section>
    </>
  )
}

export default ClintReview
