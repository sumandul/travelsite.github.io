import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactStar from 'react-rating-stars-component'
import Select from '../reuableComponent/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import InputField from '../reuableComponent/InputField'
import DatePickerComponent from '../utilities/DatePicker'
import CalendarMonth from '@mui/icons-material/CalendarMonth'
import TextArea from '../reuableComponent/TextArea'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
import Suscribe from '../Home/Suscribe'
import BreadCrump from '../utilities/BreadCrump'
const TrekBooking = () => {
  const [num, setNum] = useState(1)
  const [bookForm, setBookForm] = useState()
  const option = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: 5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  }
  const arrayOfNationality = [
    {
      id: '1 ',
      name: 'Amercian',
    },
    {
      id: '2',
      name: 'Chinease',
    },
    {
      id: '3',
      name: 'Freances',
    },
    {
      id: '4',
      name: 'Italian',
    },
  ]
  const handleInput = (e) => {
    const value = e.target.value
    setBookForm({ ...bookForm, [e.target.name]: value })
  }
  console.log(bookForm)
  return (
    <>
      <div className="breadcrump">
        <BreadCrump />
      </div>
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
              <div className="traveler mt-3">
                <div className="inner-travel">
                  <div className="d-flex align-items-center ">
                    <div className="circle-box">1</div>{' '}
                    <h6 className="ms-2">Travelers</h6>
                  </div>
                  <div className="no-tarveler mt-3">
                    <Row className="gy-4">
                      <Col xs={6} md={6}>
                        <h2>Number of Travelers </h2>
                      </Col>
                      <Col xs={6} md={4}>
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
                        <div className="mb-incre">
                          <div className="incre d-flex">
                            <span
                              className="plus"
                              onClick={() => setNum(num + 1)}
                            >
                              +
                            </span>
                            <input
                              type="text"
                              value={num}
                              className="value-input"
                            />
                            <span
                              className="minus"
                              onClick={() => setNum(num - 1)}
                            >
                              -
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="tour-add mt-3">
                <div className="d-flex align-items-center ">
                  <div className="circle-box">2</div>{' '}
                  <h6 className="ms-2">Tour Add-ons</h6>
                </div>
                <div className="tour-add-box mt-3">
                  <div className="tour-add-row d-flex align-items-center justify-content-between">
                    <div className="facilites">
                      <h2>Porter</h2>
                    </div>
                    <div className="price">
                      <h2>US$50</h2>
                    </div>
                    <div className="tour-inc-box">
                      <div className="">
                        <Link to={''}>
                          <button className="add-btn">Add</button>
                        </Link>
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
                      <Link to={''}>
                        <button className="add-btn">Add</button>
                      </Link>
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
                      <Link to={''}>
                        <button className="add-btn">Add</button>
                      </Link>
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
                      <Link to={''}>
                        <button className="add-btn">Add</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="person-detail mt-3">
                <div className="d-flex align-items-center ">
                  <div className="circle-box">3</div>{' '}
                  <h6 className="ms-2">Your Details</h6>
                </div>

                <div className="user-info">
                  <h2 className="mb-3">Traveller 1 (Lead Traveller)</h2>
                  <Row className="mt-4 gy-4">
                    <Col md={2}>
                      <Select
                        data={arrayOfNationality}
                        Placeholder="Title"
                        Icon={<ArrowDropDownIcon className="down-icon" />}
                        selectcss="select-title"
                      />
                    </Col>
                    <Col md={5}>
                      <InputField
                        type={'text'}
                        name="name"
                        Placeholder="First Name"
                        inputCss="style-input"
                        onChange={handleInput}
                        label="First Name"
                      />
                    </Col>
                    <Col md={5}>
                      <InputField
                        type={'text'}
                        name="lastname"
                        Placeholder="Last Name"
                        inputCss="style-input"
                        onChange={handleInput}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3 gy-4">
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Email Address"
                        name="email"
                        inputCss="style-input"
                        onChange={handleInput}
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Conform Email"
                        inputCss="style-input"
                        name="confirmemail"
                        onChange={handleInput}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3 gy-4">
                    <Col md={6}>
                      <DatePickerComponent
                        placeholderText="Date of Birth"
                        style="select-date"
                      />
                    </Col>
                    <Col md={6}>
                      <Select
                        data={arrayOfNationality}
                        Placeholder="Select Nationality"
                        Icon={<ArrowDropDownIcon className="down-icon" />}
                        selectcss="select-title"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3 gy-3">
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Country code"
                        inputCss="style-input"
                        name="countrycode"
                        onChange={handleInput}
                      />
                    </Col>
                    <Col md={6}>
                      <InputField
                        type={'text'}
                        Placeholder="Mobile number"
                        inputCss="style-input"
                        name="number"
                        onChange={handleInput}
                      />
                    </Col>
                    <Col md={12}>
                      <TextArea />
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="payment-box mt-3">
                <div className="d-flex align-items-center ">
                  <div className="circle-box">3</div>{' '}
                  <h6 className="ms-2">Payment</h6>
                </div>
                <p>
                  This is a secure and SSL encrypted payment via Stripe. Your
                  credit card details are safe!
                </p>
                <div className="payment-card">
                  <h3>Card Details</h3>
                  <div className="payment-card-inner">
                    <Row className="gy-3">
                      <Col sm={12}>
                        <InputField
                          type={'text'}
                          Placeholder="Your 16 digit card number"
                          inputCss="style-input"
                        />
                      </Col>
                      <Col md={5}>
                        <DatePickerComponent
                          placeholderText="Select Date"
                          style="select-date"
                          Icon={<CalendarMonth className="month" />}
                        />
                      </Col>
                      <Col md={5}>
                        <InputField
                          type={'text'}
                          Placeholder="Name of Card Holder"
                          inputCss="style-input"
                        />
                      </Col>
                      <Col md={2}>
                        <InputField
                          type={'text'}
                          Placeholder="Pin No."
                          inputCss="style-input"
                        />
                      </Col>
                    </Row>
                    <InputField />
                  </div>
                  <div className="deposit-amount payment-card-inner ">
                    <h1>Deposit Payable Now: US$ 197</h1>
                    <p>
                      The balance of <span>US$ 1,115</span> is payable online
                      before the tour start date, or upon arrival.
                    </p>
                  </div>
                  <div className="my-4">
                    <div className="check">
                      <div className="d-flex mb-2">
                        <Checkbox />
                        <p>I accept the terms of use and data policy</p>
                      </div>
                    </div>
                    <Link to={''}>
                      <button className="confirm-book-btn">
                        Confirm Booking
                      </button>
                    </Link>
                  </div>
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
      <Suscribe />
    </>
  )
}

export default TrekBooking
