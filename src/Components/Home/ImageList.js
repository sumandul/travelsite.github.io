import React from 'react'
import { Row, Col } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
const option = {
  margin: 4,
  responsiveClass: true,
  nav: true,
  dots: false,
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
      items: 1,
    },
  },
}
const ImageListm = () => {
  return (
    <>
      <Row className="gy-2">
        <OwlCarousel className="owl-theme  modal-img-slide" {...option}>
          <div className="modal-img">
            <img
              src="https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="modal-img">
            <img
              src="https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="modal-img">
            <img
              src="https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="modal-img">
            <img
              src="https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </OwlCarousel>
        {/* <Col md={12}>
          <img
            src="https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg"
            alt=""
            className="img-fluid"
          />
        </Col> */}
        {/* <Col md={4}>
          <img
            src="http://ghumante.com/wp-content/uploads/2020/09/feature-1080x633.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col md={4}>
          <img
            src="http://ghumante.com/wp-content/uploads/2020/09/feature-1080x633.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col md={4}>
          <img
            src="http://ghumante.com/wp-content/uploads/2020/09/feature-1080x633.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col md={4}>
          <img
            src="http://ghumante.com/wp-content/uploads/2020/09/feature-1080x633.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col md={4}>
          <img
            src="http://ghumante.com/wp-content/uploads/2020/09/feature-1080x633.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col md={4}>
          <img
            src="http://ghumante.com/wp-content/uploads/2020/09/feature-1080x633.jpg"
            alt=""
            className="img-fluid"
          />
        </Col> */}
      </Row>
    </>
  )
}

export default ImageListm