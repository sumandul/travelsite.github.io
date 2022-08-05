import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Suscribe = () => {
  return (
    <>
      <div className="suscribe">
        <Container>
          <Row className="gy-3">
            <Col md={12} lg={8}>
              <h3>Subscribe Our E-Newsletter</h3>
              <p>
                Sign up for Deals and Discount. Get News, Notifications and
                Updates about the recent Events and Offers.
              </p>
            </Col>
            <Col md={12} lg={4}>
              <form action="">
                <div className="d-flex align-items-center justify-content-center">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="suc-input"
                    placeholder="Enter your E-mail"
                  />
                  <button className="btn-sus">SUBSCRIBE</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Suscribe
