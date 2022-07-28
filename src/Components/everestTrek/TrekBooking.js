import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactStar from 'react-rating-stars-component'
import Select from '../reuableComponent/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import InputField from '../reuableComponent/InputField'
import DatePickerComponent from '../utilities/DatePicker'
const TrekBooking = () => {
  const option = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: 5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  }
  const arrayOfData = [
    {
      id: '1 - Jerry',
      name: 'Jerry',
    },
    {
      id: '2 - Elaine',
      name: 'Elaine',
    },
    {
      id: '3 - Kramer',
      name: 'Kramer',
    },
    {
      id: '4 - George',
      name: 'George',
    },
  ]

  return (
    <>
      <Container>
        <div className="trek-booking-container">
          <div className="text-center book-trek-title">
            <span>Enquiry About:</span>
            <h1>Everest Base Camp Trek - 14 Days</h1>
          </div>
          <div className="book-terk">
            <div className="trek-bookk-left">
              <div className="trek-right-top">
                <p>
                  Your departure date and seats are secured for the next 10
                  minutes
                </p>
              </div>
              <div className="traveler">
                <div className="inner-travel">
                  <div className="d-flex align-items-center ">
                    <div className="circle-box">1</div>{' '}
                    <h6 className="ms-2">Travelers</h6>
                  </div>
                  <div className="no-tarveler mt-3">
                    <Row>
                      <Col md={6}>
                        <h2>Number of Travelers </h2>
                      </Col>
                      <Col md={4}>
                        <div className="d-flex price-dis">
                          <div>
                            <h2>US$1,181 </h2> <span>Per Traveller</span>
                          </div>
                          <div className="dis-box ms-2">
                            <h2>US$1,181</h2>
                            <bottom className="dis">Group Discount</bottom>
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <div className="incre d-flex">
                          <span className="plus">+</span>
                          <input
                            type="text"
                            value={'1'}
                            className="value-input"
                          />
                          <span className="minus">-</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="tour-add mt-5">
                <div className="d-flex align-items-center ">
                  <div className="circle-box">2</div>{' '}
                  <h6 className="ms-2">Tour Add-ons</h6>
                </div>
                <div className="tour-add-box mt-4">
                  <div className="tour-add-row d-flex align-items-center justify-content-between">
                    <div className="facilites">
                      <h2>Porter</h2>
                    </div>
                    <div className="price">
                      <h2>US$50</h2>
                    </div>
                    <div className="tour-inc-box">
                      <div className="incre d-flex">
                        <span className="plus">+</span>
                        <input
                          type="text"
                          value={'1'}
                          className="value-input"
                        />
                        <span className="minus">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="tour-add-row d-flex align-items-center justify-content-between">
                    <div className="facilites">
                      <h2>Deluxe EBC Trek Accommodation</h2>
                    </div>
                    <div className="price">
                      <h2>US$50</h2>
                    </div>
                    <div className="tour-inc-box">
                      <div className="incre d-flex">
                        <span className="plus">+</span>
                        <input
                          type="text"
                          value={'1'}
                          className="value-input"
                        />
                        <span className="minus">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="tour-add-row d-flex align-items-center justify-content-between">
                    <div className="facilites">
                      <h2>Deluxe EBC Trek Accommodation</h2>
                    </div>
                    <div className="price">
                      <h2>US$50</h2>
                    </div>
                    <div className="tour-inc-box">
                      <div className="incre d-flex">
                        <span className="plus">+</span>
                        <input
                          type="text"
                          value={'1'}
                          className="value-input"
                        />
                        <span className="minus">-</span>
                      </div>
                    </div>
                  </div>
                  <div className="tour-add-row d-flex align-items-center justify-content-between">
                    <div className="facilites">
                      <h2>Deluxe EBC Trek Accommodation</h2>
                    </div>
                    <div className="price">
                      <h2>US$50</h2>
                    </div>
                    <div className="tour-inc-box">
                      <div className="incre d-flex">
                        <span className="plus">+</span>
                        <input
                          type="text"
                          value={'1'}
                          className="value-input"
                        />
                        <span className="minus">-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="person-detail mt-5">
                <div className="d-flex align-items-center ">
                  <div className="circle-box">3</div>{' '}
                  <h6 className="ms-2">Your Details</h6>
                </div>

                <div className="user-info">
                  <h2 className="mb-3">Traveller 1 (Lead Traveller)</h2>
                  <Row>
                    <Col md={2}>
                      <Select
                        data={arrayOfData}
                        Placeholder="Title"
                        Icon={<ArrowDropDownIcon className="down-icon" />}
                        selectcss="select-title"
                      />
                    </Col>
                    <Col md={5}>
                      <InputField
                        type={'text'}
                        Placeholder="First Name"
                        inputCss="style-input"
                      />
                    </Col>
                    <Col md={5}>
                      <InputField
                        type={'text'}
                        Placeholder="Last Name"
                        inputCss="style-input"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Email Address"
                        inputCss="style-input"
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Conform Email"
                        inputCss="style-input"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Email Address"
                        inputCss="style-input"
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Conform Email"
                        inputCss="style-input"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="trek-book-right">
              <div className="trek-img">
                <img
                  src="https://himalayanyoganepal.com/wp-content/uploads/2020/12/IMG-20201130-WA0007-730x450.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="trek-book-right-title">
                <h2>Everest Base Camp Trek - 12 days</h2>
                <div className="trek-star d-flex align-items-center mt-1">
                  <ReactStar {...option} />{' '}
                  <div className="review">390 Reviews</div>
                </div>
                <ul className="mt-4">
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="left-sub">
                      <h3>Starts in</h3>
                    </div>
                    <div className="right-sub">
                      <h3>Kathmandu, Nepal May 2024</h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="left-sub">
                      <h3>Ends in</h3>
                    </div>
                    <div className="right-sub">
                      <h3>Kathmandu, Nepal May 2024</h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="left-sub">
                      <h3>Start Time</h3>
                    </div>
                    <div className="right-sub">
                      <h3>06:00</h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="left-sub">
                      <h3>Type</h3>
                    </div>
                    <div className="right-sub">
                      <h3>Private tour</h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="left-sub">
                      <h3>Participants</h3>
                    </div>
                    <div className="right-sub">
                      <h3>1 person</h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="left-sub">
                      <h3>Age Range</h3>
                    </div>
                    <div className="right-sub">
                      <h3>6+ yrs</h3>
                    </div>
                  </li>
                </ul>
                <div className="help-box">
                  <p>Need Help or Have a Questions?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default TrekBooking