import React, { useState } from 'react'
import BreadCrump from '../utilities/BreadCrump'
import ReactStar from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tab,
  Tabs,
  Table,
} from 'react-bootstrap'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import StarRateIcon from '@mui/icons-material/StarRate'
import HikingIcon from '@mui/icons-material/Hiking'
import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Accordion } from 'react-bootstrap'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Select from '../reuableComponent/Select'
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
const EverestTrek = () => {
  const [close, setOpen] = useState(false)
  const [key, setKey] = useState('trip Overview ')
  const handleSelectChange = () => {}
  const options = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: 5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 35,
  }
  // const accodianDATA = [
  //   {
  //     title: '   Day 01: Arrive at Tribhuwan International Airport Kathmandu',
  //     descrption:
  //       'locveahcjaehbjcvhabjhbcjahsbdcjabcjabchjbashjdbjhasdcjhsdcjhsdcjscdh',
  //   },
  //   {
  //     title: '   Day 01: Arrive at Tribhuwan International Airport Kathmandu',
  //     descrption:
  //       'locveahcjaehbjcvhabjhbcjahsbdcjabcjabchjbashjdbjhasdcjhsdcjhsdcjscdh',
  //   },
  //   {
  //     title: '   Day 01: Arrive at Tribhuwan International Airport Kathmandu',
  //     descrption:
  //       'locveahcjaehbjcvhabjhbcjahsbdcjabcjabchjbashjdbjhasdcjhsdcjhsdcjscdh',
  //   },
  //   {
  //     title: '   Day 01: Arrive at Tribhuwan International Airport Kathmandu',
  //     descrption:
  //       'locveahcjaehbjcvhabjhbcjahsbdcjabcjabchjbashjdbjhasdcjhsdcjhsdcjscdh',
  //   },
  // ]
  return (
    <>
      <div className="breadcrump">
        <BreadCrump />
      </div>
      <Container>
        <div className="everest-container">
          <div className="everest-right">
            <div>
              {' '}
              <div className="d-flex align-items-center justify-content-between ">
                {' '}
                <div className="my-3">
                  <h1>Everest Base Camp Trek</h1>
                  <div className="mt-2">
                    <span className="ps-0">
                      <TaskAltIcon className="me-1" /> Best price guaranteed{' '}
                    </span>{' '}
                    <span className="px-3">
                      {' '}
                      <TaskAltIcon className="me-1" />
                      No booking fees{' '}
                    </span>
                    <span>
                      {' '}
                      <TaskAltIcon className="me-1" />
                      E-ticket/Mobile voucher
                    </span>
                  </div>
                </div>
                <div>
                  <div className="star-box d-flex align-items-center">
                    <ReactStar {...options} />

                    <div className="num-box ms-2">5.0</div>
                  </div>
                  <span>Based on 231 Reviews</span>
                </div>
              </div>
            </div>
            <div className="everest-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Everest_from_Khala_Phthar.JPG"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="activity mt-5">
              <Row>
                <Col md={8}>
                  <table>
                    <tr>
                      <td>
                        <div className="activity-box">
                          <div>
                            <h4>ACTIVITY</h4>
                            <DirectionsBikeIcon className="activity-icon" />
                            <h6>TREKKING</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div>
                            <h4>TRIP GRADE</h4>
                            <StarRateIcon className="activity-icon" />
                            <h6>Morderate</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div>
                            <h4>MAX ALTITUDE</h4>
                            <HikingIcon className="activity-icon" />
                            <h6>5545 Meter</h6>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-box">
                          <div>
                            <h4>GROUP SIZE</h4>
                            <LocalHotelIcon className="activity-icon" />
                            <h6>Min. 1 Pax. </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div>
                            <h4>ACCOMMODATION</h4>
                            <EscalatorWarningIcon className="activity-icon" />
                            <h6>TREKKING</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div>
                            <h4>BEST TIME</h4>
                            <AccessTimeIcon className="activity-icon" />
                            <h6>TREKKING</h6>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Col>
                <Col md={4}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Everest_Base_Trek_Route_Map.svg/350px-Everest_Base_Trek_Route_Map.svg.png"
                    alt=""
                    className="img-fluid"
                    height="300px"
                  />
                </Col>
              </Row>
            </div>
            <div className="trip-review my-5">
              <Tabs
                id="uncontrolled-tab-example"
                className="mb-3"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="trip Overview " title="Trip Overview ">
                  <p>
                    A trip to Everest Base Camp is on the bucket list for many
                    adventurous nature lovers. Far from an ordinary trip, this
                    majestic trek will introduce travelers to new challenges
                    with every turn. Resting just below the Khumbu Glacier,
                    Everest Base Camp is well-known worldwide and is an
                    essential landmark in any geography lesson. The Everest Base
                    Camp Trek is an adventure that allows travelers to glimpse
                    life in the Himalayas and experience the tallest peak in the
                    world. People have been fascinated by Mount Everest for
                    centuries, with Sir Edmund Hilary and Tenzing Norgay Sherpa
                    successfully being the first to summit the mountain in 1953
                    successfully. Since then, hundreds of travelers have flocked
                    to Nepal every year to see the mountains that have captured
                    the hearts and minds of so many people throughout history.
                    <p className="mt-3">
                      The 16-day Everest Base Camp Trek is not simply a regular
                      tour but an experience of a lifetime. You will spend your
                      days walking along rugged Himalayan trails with views of
                      snow-capped mountains, icy glaciers, and Sherpa heritage.
                      You will also be introduced to some of the world’s highest
                      mountains, including Mount Everest, Lhotse, Nuptse, Ama
                      Dablam, and Cho Oyu, to name just a few. Furthermore, you
                      will be able to experience the Sherpa lifestyle and grow
                      to appreciate their exceptional hospitality. Every step of
                      your Trek to Everest Base Camp will be incredible,
                      beginning with the scenic flight from Kathmandu to Lukla.
                      The 30-minute flight will treat you to views of lush green
                      Himalayan forests and snow-capped peaks. With a runway of
                      only 527 meters long, the Tenzing-Hillary Airport has one
                      of
                    </p>
                  </p>
                </Tab>
                <Tab eventKey="Itinerary " title="Itinerary ">
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header onClick={() => setOpen(!close)}>
                        Day 01: Arrive at Tribhuwan International Airport
                        Kathmandu
                        {close ? (
                          <RemoveCircleOutlineIcon className="acodian-icon" />
                        ) : (
                          <AddCircleOutlineIcon className="acodian-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        After your arrival at Tribhuvan International Airport, a
                        representative from Nepal Hiking Team will greet you
                        with a warm welcome. They will escort you to your
                        respective hotel and help you check-in and ensure you
                        are comfortable.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header onClick={() => setOpen(!close)}>
                        Day 01: Arrive at Tribhuwan International Airport
                        Kathmandu
                        {close ? (
                          <RemoveCircleOutlineIcon className="acodian-icon" />
                        ) : (
                          <AddCircleOutlineIcon className="acodian-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        After your arrival at Tribhuvan International Airport, a
                        representative from Nepal Hiking Team will greet you
                        with a warm welcome. They will escort you to your
                        respective hotel and help you check-in and ensure you
                        are comfortable.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header onClick={() => setOpen(!close)}>
                        Day 01: Arrive at Tribhuwan International Airport
                        Kathmandu
                        {close ? (
                          <RemoveCircleOutlineIcon className="acodian-icon" />
                        ) : (
                          <AddCircleOutlineIcon className="acodian-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        After your arrival at Tribhuvan International Airport, a
                        representative from Nepal Hiking Team will greet you
                        with a warm welcome. They will escort you to your
                        respective hotel and help you check-in and ensure you
                        are comfortable.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header onClick={() => setOpen(!close)}>
                        Day 01: Arrive at Tribhuwan International Airport
                        Kathmandu
                        {close ? (
                          <RemoveCircleOutlineIcon className="acodian-icon" />
                        ) : (
                          <AddCircleOutlineIcon className="acodian-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        After your arrival at Tribhuvan International Airport, a
                        representative from Nepal Hiking Team will greet you
                        with a warm welcome. They will escort you to your
                        respective hotel and help you check-in and ensure you
                        are comfortable.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header onClick={() => setOpen(!close)}>
                        Day 01: Arrive at Tribhuwan International Airport
                        Kathmandu
                        {close ? (
                          <RemoveCircleOutlineIcon className="acodian-icon" />
                        ) : (
                          <AddCircleOutlineIcon className="acodian-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        After your arrival at Tribhuvan International Airport, a
                        representative from Nepal Hiking Team will greet you
                        with a warm welcome. They will escort you to your
                        respective hotel and help you check-in and ensure you
                        are comfortable.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header onClick={() => setOpen(!close)}>
                        Day 01: Arrive at Tribhuwan International Airport
                        Kathmandu
                        {close ? (
                          <RemoveCircleOutlineIcon className="acodian-icon" />
                        ) : (
                          <AddCircleOutlineIcon className="acodian-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        After your arrival at Tribhuvan International Airport, a
                        representative from Nepal Hiking Team will greet you
                        with a warm welcome. They will escort you to your
                        respective hotel and help you check-in and ensure you
                        are comfortable.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header onClick={() => setOpen(!close)}>
                        Day 01: Arrive at Tribhuwan International Airport
                        Kathmandu
                        {close ? (
                          <RemoveCircleOutlineIcon className="acodian-icon" />
                        ) : (
                          <AddCircleOutlineIcon className="acodian-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        After your arrival at Tribhuvan International Airport, a
                        representative from Nepal Hiking Team will greet you
                        with a warm welcome. They will escort you to your
                        respective hotel and help you check-in and ensure you
                        are comfortable.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Tab>
                <Tab eventKey="Cost Includes" title="Cost Includes">
                  <div className="cost">
                    <h3>COST INCLUDES</h3>

                    <ul>
                      <li>
                        <CheckCircleIcon className="check" />
                        <span>
                          All ground transport in a private vehicle, including
                          airport transfers
                        </span>
                      </li>
                      <li>
                        <CheckCircleIcon className="check" />
                        <span>
                          All ground transport in a private vehicle, including
                          airport transfers
                        </span>
                      </li>
                      <li>
                        <CheckCircleIcon className="check" />
                        <span>
                          All ground transport in a private vehicle, including
                          airport transfers
                        </span>
                      </li>
                      <li>
                        <CheckCircleIcon className="check" />
                        <span>
                          All ground transport in a private vehicle, including
                          airport transfers
                        </span>
                      </li>
                      <li>
                        <CheckCircleIcon className="check" />
                        <span>
                          All ground transport in a private vehicle, including
                          airport transfers
                        </span>
                      </li>
                      <li>
                        <CheckCircleIcon className="check" />
                        <span>
                          All ground transport in a private vehicle, including
                          airport transfers
                        </span>
                      </li>
                      <li>
                        <CheckCircleIcon className="check" />
                        <span>
                          All ground transport in a private vehicle, including
                          airport transfers
                        </span>
                      </li>
                    </ul>
                    <div className="cost mt-4">
                      <h3>COST NOT INCLUDES</h3>
                      <ul>
                        <li>
                          <CancelIcon className="cross" />
                          <span>
                            All ground transport in a private vehicle, including
                            airport transfers
                          </span>
                        </li>
                        <li>
                          <CancelIcon className="cross" />
                          <span>
                            All ground transport in a private vehicle, including
                            airport transfers
                          </span>
                        </li>
                        <li>
                          <CancelIcon className="cross" />
                          <span>
                            All ground transport in a private vehicle, including
                            airport transfers
                          </span>
                        </li>
                        <li>
                          <CancelIcon className="cross" />
                          <span>
                            All ground transport in a private vehicle, including
                            airport transfers
                          </span>
                        </li>
                        <li>
                          <CancelIcon className="cross" />
                          <span>
                            All ground transport in a private vehicle, including
                            airport transfers
                          </span>
                        </li>
                        <li>
                          <CancelIcon className="cross" />
                          <span>
                            All ground transport in a private vehicle, including
                            airport transfers
                          </span>
                        </li>
                        <li>
                          <CancelIcon className="cross" />
                          <span>
                            All ground transport in a private vehicle, including
                            airport transfers
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Gallery" title="Gallery">
                  <div className="gallery">
                    <h3>Gallery</h3>
                    <Row className="gy-4">
                      <Col md={4}>
                        <img
                          src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/ypr3zj7yqvwabm574vmxku0chiwm_everest-base-camp-trek-independently-main-image-900.png"
                          alt=""
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbRNnvF_Gn6qRwJig9f1YfiCQcokbg4c4dWZo0HwjQLrKke_-zRXKWth1j0z5904f2_E&usqp=CAU"
                          alt=""
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbRNnvF_Gn6qRwJig9f1YfiCQcokbg4c4dWZo0HwjQLrKke_-zRXKWth1j0z5904f2_E&usqp=CAU"
                          alt=""
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/ypr3zj7yqvwabm574vmxku0chiwm_everest-base-camp-trek-independently-main-image-900.png"
                          alt=""
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbRNnvF_Gn6qRwJig9f1YfiCQcokbg4c4dWZo0HwjQLrKke_-zRXKWth1j0z5904f2_E&usqp=CAU"
                          alt=""
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={4}>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbRNnvF_Gn6qRwJig9f1YfiCQcokbg4c4dWZo0HwjQLrKke_-zRXKWth1j0z5904f2_E&usqp=CAU"
                          alt=""
                          className="img-fluid"
                        />
                      </Col>
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey="Cost & Date" title="Cost & Date">
                  <div className="join-trip">
                    <h3>Join Upcoming Trips</h3>
                    <Row>
                      <Col md={9}>
                        <div className="join-content">
                          <p>
                            Book this trip with us. Here are the upcoming dates.
                            Feel free to share this trip with your friends and
                            family. For custom trips or general inquiries
                            contact us.
                          </p>
                        </div>
                      </Col>
                      <Col md={3}>
                        <Select
                          data={arrayOfData}
                          onChange={handleSelectChange}
                        />
                      </Col>
                    </Row>
                    <div className="trip-table mt-5">
                      <Table>
                        <thead>
                          <tr>
                            <th>DEPARTURE DATE</th>
                            <th>PRICE </th>
                            <th>TRIP STATUS</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6>14 Days</h6>
                              <p>30 Jun, 2022 - 13 Jul, 2022</p>
                            </td>
                            <td>
                              <span>$1800</span>
                              <div>
                                <span>$1800</span>
                              </div>
                            </td>
                            <td>
                              <div className="status">
                                <p>Guaranteed</p>
                              </div>
                            </td>
                            <td>
                              <button className="enquery">
                                <Link to={''}>Enquery Now</Link>
                              </button>
                              <button className="nook-btn">
                                <Link to={''}>Book Now</Link>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>14 Days</h6>
                              <p>30 Jun, 2022 - 13 Jul, 2022</p>
                            </td>
                            <td>
                              <span>$1800</span>
                              <div>
                                <span>$1800</span>
                              </div>
                            </td>
                            <td>
                              {' '}
                              <div className="status">
                                <p>Guaranteed</p>
                              </div>
                            </td>
                            <td>
                              <button className="enquery">
                                <Link to={''}>Enquery Now</Link>
                              </button>
                              <button className="nook-btn">
                                <Link to={''}>Book Now</Link>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>14 Days</h6>
                              <p>30 Jun, 2022 - 13 Jul, 2022</p>
                            </td>
                            <td>
                              <span>$1800</span>
                              <div>
                                <span>$1800</span>
                              </div>
                            </td>
                            <td>
                              <div className="status">
                                <p>Guaranteed</p>
                              </div>
                            </td>
                            <td>
                              <button className="enquery">
                                <Link to={''}>Enquery Now</Link>
                              </button>
                              <button className="nook-btn">
                                <Link to={''}>Book Now</Link>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Reviews " title="Reviews ">
                  <p>
                    People have been fascinated by Mount Everest for centuries,
                    with Sir Edmund Hilary and Tenzing Norgay Sherpa
                    successfully being the first to summit the mountain in 1953
                    successfully. Since then, hundreds of travelers have flocked
                    to Nepal every year to see the mountains that have captured
                    the hearts and minds of so many people throughout history.
                  </p>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="everest-left">
            <div className="left-container">
              <div className="left-top">
                <div>
                  <h6>
                    14 Days <span>from US$ 1800</span>
                  </h6>
                  <h3>US$ 1150.00</h3>
                </div>
              </div>
              <div className="mid-container">
                <div className="mid-title d-flex align-items-center justify-content-between">
                  <div>
                    <h5>No. of Persons</h5>
                  </div>
                  <div>
                    <h5>Price Per Person</h5>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>1 per</p>
                  </div>
                  <div>
                    <p>- US$ 1450 </p>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>1 per</p>
                  </div>
                  <div>
                    <p>- US$ 1450 </p>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>1 per</p>
                  </div>
                  <div>
                    <p>- US$ 1450 </p>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>2 per</p>
                  </div>
                  <div>
                    <p>- US$ 1450 </p>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>2-3per</p>
                  </div>
                  <div>
                    <p> US$ 1450 </p>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>2-3per</p>
                  </div>
                  <div>
                    <p>- US$ 1450 </p>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>2-3per</p>
                  </div>
                  <div>
                    <p>- US$ 1450 </p>
                  </div>
                </div>
                <div className="price-person d-flex align-items-center justify-content-between">
                  <div>
                    <p>2-3per</p>
                  </div>
                  <div>
                    <p>- US$ 1450 </p>
                  </div>
                </div>
                <div className="offer">
                  <div className="mt-2">
                    <span>Best Price Guarantee </span>
                  </div>
                  <div className="mt-2">
                    <span>Hassle-Free Booking </span>
                  </div>
                  <div className="mt-2">
                    <span>No Booking or Credit Card Fees</span>
                  </div>
                </div>
              </div>
              <div className="bottom-container">
                <div>
                  <div className="excelent d-flex align-items-center  justify-content-center">
                    <ReactStar {...options} />{' '}
                    <span>
                      <div className="ex ms-1">
                        <p>5 Excellent</p>
                      </div>
                    </span>
                  </div>

                  <div>
                    {' '}
                    <Link to={''}>
                      {' '}
                      <button className="book-trip">Book your trip</button>
                    </Link>
                  </div>
                  <div>
                    <Link to={''}>
                      <button className="ask-btn">Ask Inquire</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default EverestTrek
