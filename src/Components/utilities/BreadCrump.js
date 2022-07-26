import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
const BreadCrump = () => {
  return (
    <>
      <Container>
        <div className="breadcrump-box">
          <div className="bread-crump-item">
            <Link to={'/'}>Home </Link>{' '}
            <NavigateNextIcon className="next-item" />
          </div>
          <div className="bread-crump-item">
            <Link to={'/'}>Nepal </Link>{' '}
            <NavigateNextIcon className="next-item" />
          </div>
          <div className="bread-crump-item">
            <Link to={'/'}>Expedition </Link>{' '}
          </div>
        </div>
      </Container>
    </>
  )
}

export default BreadCrump
