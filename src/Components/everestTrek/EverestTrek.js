import React, { useState, useEffect, useCallback } from 'react'
import BreadCrump from '../utilities/BreadCrump'
import ReactStar from 'react-rating-stars-component'
import { ImageGroup, Image } from 'react-fullscreen-image'
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
  Modal,
} from 'react-bootstrap'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import StarRateIcon from '@mui/icons-material/StarRate'
import HikingIcon from '@mui/icons-material/Hiking'
import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Accordion, Carousel } from 'react-bootstrap'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Select from '../reuableComponent/Select'
import DatePickerComponent from '../utilities/DatePicker'
import PopUpModel from '../reuableComponent/PopUpModel'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import ModelComponent from '../utilities/ModelComponent'
import ReactImageMagnify from 'react-image-magnify'
import { useParams } from 'react-router-dom'
import EnqueryForm from './EnqueryForm'
import axios from 'axios'

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
  const [currentImage, setCurrentImage] = useState(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const { id } = useParams()
  const [tour, setTour] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/tour/${id}`)
      return setTour(response.data)
    }
    fetchData()
  }, [])
  console.log(tour, 'id')

  const [fix, setFix] = useState(false)
  const [fixMid, setFixs] = useState(false)

  const setfixMid = () => {
    console.log(window.scrollY, 'yyyy')
    if (window.scrollY <= 300) {
      setFixs(true)
    } else {
      setFixs(false)
    }
  }
  const setFixed = () => {
    console.log(window.scrollY, 'yyyy')
    if (window.scrollY >= 300) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixed)
  window.addEventListener('scroll', setfixMid)
  console.log(fix)
  const [openclose, setOpenClose] = useState(false)
  const [opencloseDiv, setOpenCloseDiv] = useState('')
  const [close, setOpen] = useState(false)
  const [closeS, setOpens] = useState(false)
  const [key, setKey] = useState('trip Overview ')
  const [isOpen, setIsOpen] = useState(false)
  const handleSelectChange = () => {}
  const options = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: 5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 28,
  }
  const option = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: 5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 12,
  }
  function openModal() {
    setIsOpen(!isOpen)
  }
  console.log(tour?.galleries)
  const [show, setShow] = useState(false)
  const [showingle, setSingle] = useState(false)

  const handleInqueryForm = () => setShow(true)
  const handleCloseSingleImage = () => setSingle(false)
  const handleShow = () => setShow(true)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)(true)
  }, [])
  const closeImageViewer = () => {
    setCurrentImage(0)(false)
  }
  return (
    <>
      <PopUpModel
        show={show}
        // handleclose={handleClose}
        header="Enquery with us? "
        body={<EnqueryForm />}
        className="enquery-modal"
      />

      {/* <PopUpModel
        show={show}
        handleclose={handleClose}
        header="Everest Base Camp Trek Map"
        className="img-popup"
        body={
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src:
                  'https://www.nepaltrekkinginhimalaya.com/images/articles/beDEJ-6e361807-5ec2-429c-9411-bc71b985c0b1.gif',
              },
              largeImage: {
                src:
                  'https://www.nepaltrekkinginhimalaya.com/images/articles/beDEJ-6e361807-5ec2-429c-9411-bc71b985c0b1.gif',
                width: 1200,
                height: 1200,
              },
            }}
          />
        }
      /> */}

      <div className="breadcrump">
        <BreadCrump />
      </div>
      <Container>
        <div className="everest-container">
          <div className="everest-right">
            <div>
              <div className="flex-xs-column e-title  d-flex  align-items-center justify-content-between ">
                <div className="my-3">
                  <h1>{tour?.title}</h1>
                  <div className="hide-on-desktop">
                    <Row>
                      <Col xs={6}>
                        <span className="">
                          <TaskAltIcon className="me-1 task-icon" /> Best price
                          guaranteed{' '}
                        </span>
                      </Col>
                      <Col xs={6}>
                        <span className="">
                          <TaskAltIcon className="me-1 task-icon" />
                          No booking fees
                        </span>
                      </Col>
                      <Col xs={8}>
                        <span className="">
                          <TaskAltIcon className="me-1 task-icon" />
                          E-ticket/Mobile voucher
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-2 hide-on-mb">
                    <span className="ps-0">
                      <TaskAltIcon className=" task-icon" /> Best price
                      guaranteed{' '}
                    </span>
                    <span className="px-3 mid-span">
                      <TaskAltIcon className="me-1 task-icon  " />
                      No booking fees
                    </span>
                    <span className="mt-3">
                      <TaskAltIcon className="me-1 task-icon" />
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
            <Carousel controls={false}>
              {tour?.galleries.map((image, index) => {
                return (
                  <Carousel.Item key={`image_${index}`}>
                    <div className="everest-img">
                      <img src={image} alt="" className="img-fluid" />
                    </div>
                  </Carousel.Item>
                )
              })}
            </Carousel>

            <div className="activity mt-5">
              <Row>
                <Col md={8}>
                  <table>
                    <tr>
                      <td>
                        <div className="activity-box">
                          <div className="text-center">
                            <h4>ACTIVITY</h4>
                            <DirectionsBikeIcon className="activity-icon" />
                            <h6>{tour?.activity_id}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div className="text-center">
                            <h4>TRIP GRADE</h4>
                            <StarRateIcon className="activity-icon" />
                            <h6>{tour?.trip_grade}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div className="text-center">
                            <h4>MAX ALTITUDE</h4>
                            <HikingIcon className="activity-icon" />
                            <h6>{tour?.max_altitude}</h6>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="activity-box">
                          <div className="text-center">
                            <h4>GROUP SIZE</h4>
                            <LocalHotelIcon className="activity-icon" />
                            <h6>Min. {tour?.group_size} Pax. </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div className="text-center">
                            <h4>ACCOMMODATION</h4>
                            <EscalatorWarningIcon className="activity-icon" />
                            <h6>{tour?.accommodation}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        {' '}
                        <div className="activity-box">
                          <div className="text-center">
                            <h4>BEST TIME</h4>
                            <AccessTimeIcon className="activity-icon" />
                            <h6>{tour?.best_time}</h6>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </Col>
                <Col md={4}>
                  <div className="map-box" onClick={handleShow}>
                    <iframe
                      src={tour?.map}
                      title="W3Schools Free Online Web Tutorials"
                      className="img-fluid"
                    ></iframe>
                  </div>
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
                  <p>{tour?.over_view}</p>
                </Tab>
                <Tab eventKey="Itinerary" title="Itinerary ">
                  <Accordion>
                    {tour?.itinerary?.map((item, index) => {
                      return (
                        <Accordion.Item eventKey={index} key={index}>
                          <Accordion.Header
                            onClick={() => {
                              setOpenCloseDiv('first_' + index)
                              setOpenClose(!openclose)
                            }}
                          >
                            {item.title}
                            {opencloseDiv === 'first_' + index &&
                            openclose === true ? (
                              <RemoveCircleOutlineIcon className="acodian-icon" />
                            ) : (
                              <AddCircleOutlineIcon className="acodian-icon" />
                            )}
                          </Accordion.Header>
                          <Accordion.Body>
                            <p className="py-2">
                              {item.description.replace(/(<([^>]+)>)/gi, '')}
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                      )
                    })}
                  </Accordion>
                </Tab>
                <Tab eventKey="Cost Includes" title=" Includes & Excludes">
                  <div className="cost">
                    <h3> INCLUDES</h3>

                    <ul>
                      {tour?.includes.map((include, index) => {
                        console.log(include, 'in')
                        return (
                          <li key={`include_${index}`}>
                            <CheckCircleIcon className="check" />
                            <span>{include.content}</span>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="cost mt-4">
                      <h3>EXCLUDES</h3>
                      <ul>
                        {tour?.excludes.map((exclude, index) => {
                          return (
                            <li key={`exclude_${index}`}>
                              <CancelIcon className="cross" />
                              <span>{exclude.content}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Gallery" title="Gallery">
                  <div className="gallery">
                    <h3>Gallery</h3>
                    <Row className="gy-3 gx-2">
                      {tour?.galleries?.map((image, index) => {
                        console.log(image)
                        return (
                          <Col md={4} key={`img_${index}`}>
                            <div className="ind-img-box">
                              <img
                                id="img_open"
                                src={image}
                                alt=""
                                className="img-fluid"
                                onClick={() => {
                                  setIsViewerOpen(!isViewerOpen)
                                  setCurrentImage(index)
                                }}
                              />
                            </div>
                          </Col>
                        )
                      })}
                      {isViewerOpen && (
                        <Lightbox
                          mainSrc={tour?.galleries[currentImage]}
                          onCloseRequest={() => setIsViewerOpen(false)}
                        />
                      )}
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey="Cost & Date" title="Cost & Date">
                  <div className="join-trip">
                    <h3>Join Upcoming Trips</h3>
                    <Row className="mt-3">
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
                        <DatePickerComponent
                          style="select-date"
                          placeholderText="Select Date"
                          Icon={<CalendarMonthIcon className="month" />}
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
                              <span className="cut">$1800</span>
                              <div>
                                <span>$1800</span>
                              </div>
                            </td>
                            <td>
                              <div className="status">
                                <p>Guaranteed</p>
                              </div>
                            </td>
                            <td className="">
                              <Link to={''}>
                                <button className="enquery">Enquery Now</button>
                              </Link>
                              <Link to={''}>
                                <button className="nook-btn">Book Now</button>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>14 Days</h6>
                              <p>30 Jun, 2022 - 13 Jul, 2022</p>
                            </td>
                            <td>
                              <span className="cut">$1800</span>
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
                              <Link to={''}>
                                <button className="enquery">Enquery Now</button>
                              </Link>
                              <Link to={''}>
                                <button className="nook-btn">Book Now</button>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>14 Days</h6>
                              <p>30 Jun, 2022 - 13 Jul, 2022</p>
                            </td>
                            <td>
                              <span className="cut">$1800</span>
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
                              <Link to={''}>
                                <button className="enquery">Enquery Now</button>
                              </Link>
                              <Link to={''}>
                                <button className="nook-btn">Book Now</button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Reviews " title="Reviews ">
                  <div className="review">
                    <h3>Review</h3>
                    <div className="mt-3">
                      <div className="d-flex">
                        {' '}
                        <h6>Nicky N Prasad,</h6>{' '}
                        <span className="ms-1">Australia</span>
                      </div>
                      <ReactStar {...option} />
                      <div className="review-content">
                        <p>
                          I had always wanted to do the Everest Trek, and when I
                          finally had the opportunity, I was delighted with
                          enthusiasm! I think I am also fortunate to have been
                          in the company of Nepal Hiking Team because they gave
                          me no reason whatsoever to companion about anything at
                          all.
                        </p>
                        <p>
                          <p className="mt-4">
                            Every service I received was top-notch, and I was
                            always provided the best available services, from
                            the food and guesthouses to the porter and guiding
                            services.
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="text-end mt-2">
                      <Link to={''}>
                        <button className="enquery">Write Revie</button>
                      </Link>
                      <Link to={''}>
                        <button className="nook-btn">View More</button>
                      </Link>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="everest-left">
            <div className={fix ? 'fix-right' : 'left-container'}>
              <div className="left-top">
                <div className="mt-3">
                  <h6>
                    14 Days <span>from US$ 1800</span>
                  </h6>
                  <h3>US$ 1150.00</h3>
                </div>
                <div className="grp-btn">Group</div>
              </div>

              {fixMid && (
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
                  <div className="offer mt-4">
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
              )}
              <div className="bottom-container">
                <div>
                  <div className="excelent d-flex align-items-center  justify-content-center mb-2">
                    <ReactStar {...options} />{' '}
                    <span>
                      <div className="ex ms-1">
                        <p>5 Excellent</p>
                      </div>
                    </span>
                  </div>

                  <div>
                    {' '}
                    <Link to={'/tour/booking'}>
                      {' '}
                      <button className="book-trip">Book your trip</button>
                    </Link>
                  </div>
                  <div>
                    <Link to={''} onClick={handleInqueryForm}>
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
