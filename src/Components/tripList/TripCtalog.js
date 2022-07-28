import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DoneIcon from '@mui/icons-material/Done'
import ReactStar from 'react-rating-stars-component'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import StarIcon from '@mui/icons-material/Star'
import ReactPaginate from 'react-paginate'
import Select from '../reuableComponent/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
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
let pageCount = 6
const TripCtalog = () => {
  const [select, SetSelected] = useState()
  const handleSelectChange = (selectedValue) => {
    SetSelected(selectedValue)
  }
  const [value, setValue] = useState('default')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  const handlePageClick = () => {}
  const options = {
    edit: false,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: 4.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 20,
  }
  const option = [
    { value: 'SortBy:popularity', label: 'SortBy:popularity' },
    { value: 'SortBy:rice', label: 'SortBy:rice' },
    { value: 'SortBy:Rating', label: 'SortBy:Rating' },
  ]
  console.log(arrayOfData)
  return (
    <>
      <div className="d-flex align-items-center justify-content-between title-trip py-3">
        <h1>Nepal Tours and Trips 2022/2023</h1>{' '}
        <div className="select-box">
          <Select
            data={arrayOfData}
            onChange={handleSelectChange}
            Icon={<ArrowDropDownIcon className="down-icon" />}
            selectcss="select-title"
            Placeholder="Sort By:"
          />{' '}
        </div>
      </div>
      <div className="content">
        <p>
          Nepal, the heart of the Himalayas, boasts plenty of amazing tours.
          Visit Sherpa villages while trekking the Everest Base Camp trek.
          Experience Boudhanath Stupa and Pashupatinath temple on a sightseeing
          tour in Kathmandu, Nepal’s capital and cultural hub. Or, enjoy more
          nature and see rhinos, tigers and elephants on a jungle safari in
          Chitwan National Park.
        </p>
      </div>
      <div className="trip-box mt-4">
        <h6>+300 trips in Nepal with 3,629 Reviews</h6>
        <div className="inner-box">
          <Row>
            <Col md={10}>
              <Row>
                <Col md={6}>
                  <div className="img position-relative">
                    <img
                      src="https://www.adventurealternative.com/media/1309/nepal_everest-final-section-of-summit-ridge-cornice.jpg?height=788&width=1082&quality=&mode=Crop&center=0.27666666666666667,0.54&bgcolor="
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">
                      <StarIcon className="me-2" />
                      BEST PRICE
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="img-content  ">
                    <h5>Everest Base Camp Trek</h5>
                    <div className="d-flex align-items-center">
                      <ReactStar {...options} /> <span> of 337 reviews</span>
                    </div>
                    <Row>
                      <Col md={5}>
                        <div className="d-flex align-items-end ">
                          <DoneIcon className="tick" />{' '}
                          <p>Free cancellation </p>
                        </div>
                        <div className="tour-type">
                          <ul>
                            <li>Tour Type</li>
                            <li>Activities </li>
                            <li>Accommodation </li>
                            <li>Transport </li>
                            <li>Start </li>
                            <li>Ends </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={7}>
                        <div className="text-start">
                          <div className="d-flex align-items-end">
                            <DoneIcon className="tick" />
                            <p>Trip customizable</p>
                          </div>
                          <div className="tour-event">
                            <ul>
                              <li>Private and Group Tour</li>
                              <li> Trekking</li>
                              <li> Guest House & Hotel</li>
                              <li> Flight & Private Vehicle</li>
                              <li>Kathmandu, Nepal</li>
                              <li>Kathmandu, Nepal</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <div className="expedition-box text-end">
                <button className="view-btn">
                  <Link to={'/everest'}>View Details</Link>
                </button>
                <div className="mt-3">
                  <p> Next Departures </p>
                  <div className="mt-2">
                    <span>
                      <AccessTimeIcon className="me-2" />
                      jun7
                    </span>
                  </div>
                </div>
                <div className="price">
                  <div>
                    <p className="me-3 mb-2">12 Days </p>
                    <span>USD $1000</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="trip-box mt-5">
        <div className="inner-box">
          <Row>
            <Col md={10}>
              <Row>
                <Col md={6}>
                  <div className="img position-relative">
                    <img
                      src="https://www.adventurealternative.com/media/1309/nepal_everest-final-section-of-summit-ridge-cornice.jpg?height=788&width=1082&quality=&mode=Crop&center=0.27666666666666667,0.54&bgcolor="
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">
                      <StarIcon className="me-2" />
                      BEST PRICE
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="img-content  ">
                    <h5>Everest Base Camp Trek</h5>
                    <div className="d-flex align-items-center">
                      <ReactStar {...options} /> <span> of 337 reviews</span>
                    </div>
                    <Row>
                      <Col md={5}>
                        <div className="d-flex align-items-end ">
                          <DoneIcon className="tick" />{' '}
                          <p>Free cancellation </p>
                        </div>
                        <div className="tour-type">
                          <ul>
                            <li>Tour Type</li>
                            <li>Activities </li>
                            <li>Accommodation </li>
                            <li>Transport </li>
                            <li>Start </li>
                            <li>Ends </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={7}>
                        <div className="text-start">
                          <div className="d-flex align-items-end">
                            <DoneIcon className="tick" />
                            <p>Trip customizable</p>
                          </div>
                          <div className="tour-event">
                            <ul>
                              <li>Private and Group Tour</li>
                              <li> Trekking</li>
                              <li> Guest House & Hotel</li>
                              <li> Flight & Private Vehicle</li>
                              <li>Kathmandu, Nepal</li>
                              <li>Kathmandu, Nepal</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <div className="expedition-box text-end">
                <button className="view-btn">
                  <Link to={''}>View Details</Link>
                </button>
                <div className="mt-3">
                  <p> Next Departures </p>
                  <div className="mt-2">
                    <span>
                      <AccessTimeIcon className="me-2" />
                      jun7
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span>
                    <AccessTimeIcon className="me-2" />
                    jun7
                  </span>
                </div>
                <div className="price">
                  <div>
                    <p className="me-3 mb-2">12 Days </p>
                    <span>USD $1000</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="trip-box mt-5">
        <div className="inner-box">
          <Row>
            <Col md={10}>
              <Row>
                <Col md={6}>
                  <div className="img position-relative">
                    <img
                      src="https://www.adventurealternative.com/media/1309/nepal_everest-final-section-of-summit-ridge-cornice.jpg?height=788&width=1082&quality=&mode=Crop&center=0.27666666666666667,0.54&bgcolor="
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">
                      <StarIcon className="me-2" />
                      BEST PRICE
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="img-content  ">
                    <h5>Everest Base Camp Trek</h5>
                    <div className="d-flex align-items-center">
                      <ReactStar {...options} /> <span> of 337 reviews</span>
                    </div>
                    <Row>
                      <Col md={5}>
                        <div className="d-flex align-items-end ">
                          <DoneIcon className="tick" />{' '}
                          <p>Free cancellation </p>
                        </div>
                        <div className="tour-type">
                          <ul>
                            <li>Tour Type</li>
                            <li>Activities </li>
                            <li>Accommodation </li>
                            <li>Transport </li>
                            <li>Start </li>
                            <li>Ends </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={7}>
                        <div className="text-start">
                          <div className="d-flex align-items-end">
                            <DoneIcon className="tick" />
                            <p>Trip customizable</p>
                          </div>
                          <div className="tour-event">
                            <ul>
                              <li>Private and Group Tour</li>
                              <li> Trekking</li>
                              <li> Guest House & Hotel</li>
                              <li> Flight & Private Vehicle</li>
                              <li>Kathmandu, Nepal</li>
                              <li>Kathmandu, Nepal</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <div className="expedition-box text-end">
                <button className="view-btn">
                  <Link to={''}>View Details</Link>
                </button>
                <div className="mt-3">
                  <p> Next Departures </p>
                  <div className="mt-2">
                    <span>
                      <AccessTimeIcon className="me-2" />
                      jun7
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span>
                    <AccessTimeIcon className="me-2" />
                    jun7
                  </span>
                </div>
                <div className="price">
                  <div>
                    <p className="me-3 mb-2">12 Days </p>
                    <span>USD $1000</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="trip-box mt-5">
        <div className="inner-box">
          <Row>
            <Col md={10}>
              <Row>
                <Col md={6}>
                  <div className="img position-relative">
                    <img
                      src="https://www.adventurealternative.com/media/1309/nepal_everest-final-section-of-summit-ridge-cornice.jpg?height=788&width=1082&quality=&mode=Crop&center=0.27666666666666667,0.54&bgcolor="
                      alt=""
                      className="img-fluid"
                    />
                    <button className="feature-btn">
                      <StarIcon className="me-2" />
                      BEST PRICE
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="img-content  ">
                    <h5>Everest Base Camp Trek</h5>
                    <div className="d-flex align-items-center">
                      <ReactStar {...options} /> <span> of 337 reviews</span>
                    </div>
                    <Row>
                      <Col md={5}>
                        <div className="d-flex align-items-end ">
                          <DoneIcon className="tick" />{' '}
                          <p>Free cancellation </p>
                        </div>
                        <div className="tour-type">
                          <ul>
                            <li>Tour Type</li>
                            <li>Activities </li>
                            <li>Accommodation </li>
                            <li>Transport </li>
                            <li>Start </li>
                            <li>Ends </li>
                          </ul>
                        </div>
                      </Col>
                      <Col md={7}>
                        <div className="text-start">
                          <div className="d-flex align-items-end">
                            <DoneIcon className="tick" />
                            <p>Trip customizable</p>
                          </div>
                          <div className="tour-event">
                            <ul>
                              <li>Private and Group Tour</li>
                              <li> Trekking</li>
                              <li> Guest House & Hotel</li>
                              <li> Flight & Private Vehicle</li>
                              <li>Kathmandu, Nepal</li>
                              <li>Kathmandu, Nepal</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <div className="expedition-box text-end">
                <button className="view-btn">
                  <Link to={''}>View Details</Link>
                </button>
                <div className="mt-3">
                  <p> Next Departures </p>
                  <div className="mt-2">
                    <span>
                      <AccessTimeIcon className="me-2" />
                      jun7
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span>
                    <AccessTimeIcon className="me-2" />
                    jun7
                  </span>
                </div>
                <div className="price">
                  <div>
                    <p className="me-3 mb-2">12 Days </p>
                    <span>USD $1000</span>
                  </div>
                </div>
              </div>
            </Col>
            <div className="my-5">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
            </div>
          </Row>
        </div>
      </div>
    </>
  )
}

export default TripCtalog
