import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import DoneIcon from '@mui/icons-material/Done'
import ReactStar from 'react-rating-stars-component'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import StarIcon from '@mui/icons-material/Star'
import ReactPaginate from 'react-paginate'
import Select from '../reuableComponent/Select'
import { fetchTourList } from '../../redux/Reducer'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

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
let pageCount = 3
const TripCtalog = (props) => {
  const { slug } = useParams()

  const data = useSelector((data) => data.listTour.Tourlist.data)

  const dispatch = useDispatch()
  const location = useLocation()
  console.log(location)

  const [tours, setTour] = useState()
  var destinationtours = props.tour
  console.log(destinationtours?.length, 'tttt')
  // console.log(data?.data?.length, 'tttt')
  useEffect(() => {
    if (destinationtours?.length === 0) {
      dispatch(fetchTourList())
      setTour(data?.data)
    } else {
      setTour(destinationtours)
    }
  }, [dispatch, destinationtours])

  console.log(tours, 'tour')
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
        <h1>{props.place} Tours and Trips 2022/2023</h1>{' '}
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
        <h6 className="mt-4">+300 trips in Nepal with 3,629 Reviews</h6>
      </div>
      {tours?.map((data, index) => {
        console.log(data, 'dfytgdugyduqhwih')
        return (
          <div
            className={index === 0 ? 'package mt-1' : 'package mt-5'}
            key={data.id}
          >
            <div className="img position-relative">
              <Link to={`/tour/${data.id}`}>
                <img
                  src={window.baseURL + data?.image}
                  alt=""
                  className="img-fluid"
                />
              </Link>
              <button className="feature-btn">
                <StarIcon className="me-2" />
                BEST PRICE
              </button>
            </div>
            <div className="view-detail">
              <Row>
                <Col md={8} lg={8}>
                  <div className="img-content">
                    <h5>{data.title}</h5>
                    <div className="d-flex align-items-center">
                      <ReactStar {...options} /> <span> of 337 reviews</span>
                    </div>
                    <Row>
                      <Col xs={6} md={5}>
                        <div className="d-flex align-items-end ">
                          <DoneIcon className="tick" />{' '}
                          <p>Free cancellation </p>
                        </div>
                        <div className="tour-type">
                          <ul>
                            <li>Activities </li>
                            <li>Accommodation </li>
                            <li>Transport </li>
                            <li>Start </li>
                            <li>Ends </li>
                          </ul>
                        </div>
                      </Col>
                      <Col xs={6} md={7}>
                        <div className="text-start">
                          <div className="d-flex align-items-end">
                            <DoneIcon className="tick" />
                            <p>Trip customizable</p>
                          </div>
                          <div className="tour-event">
                            <ul>
                              <li> {data.activity_id}</li>
                              <li> Guest House & Hotel</li>
                              <li> {data.transport}</li>
                              <li>Kathmandu, Nepal</li>
                              <li>Kathmandu, Nepal</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>
                </Col>
                <Col md={4} lg={4} className="text-end">
                  <div className="expedition-box ">
                    <button className="view-btn">
                      <Link to={`/${data.id}`}>View Details</Link>
                    </button>
                    <div className="mt-2 next-p">
                      <p> Next Departures </p>
                      <div className="mt-2">
                        <span>
                          <AccessTimeIcon className="me-2" />
                          jun7
                        </span>
                        <div className="mt-2">
                          {' '}
                          <span>
                            <AccessTimeIcon className="me-2" />
                            jun7
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <div>
                        <p className="me-3 mb-2">12 Days </p>
                        <span>USD ${data.current_price}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )
      })}
      <div className="mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next "
          className="pagination"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  )
}

export default TripCtalog
