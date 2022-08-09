import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import DropDown from './DropDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const MenuItem = ({ menu, depthLevel }) => {
  const ref = useRef()
  const [dropdown, setDropdown] = useState(false)
  useEffect(() => {
    // alert(dropdown)
  }, [dropdown])
  console.log(depthLevel, 'menu')
  console.log(depthLevel + 1, 'minus')
  const [windowSize, setWindowSize] = useState()
  console.log(windowSize)
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  // const onMouseEnter = () => {
  //   setDropdown(true)
  // }

  // const onMouseLeave = () => {
  //   setDropdown(false)
  // }
  return (
    <>
      {menu?.submenu ? (
        <li class="nav-item" ref={ref}>
          <Link
            className="nav-link active d-flex align-items-center mb-menu"
            to={'/'}
            onClick={
              depthLevel + 1 === depthLevel
                ? () => setDropdown(false)
                : () => setDropdown(true)
            }

            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
          >
            {depthLevel}
            {depthLevel < 1 ? (
              <span>
                <KeyboardArrowDownOutlinedIcon
                  className={dropdown ? 'rotate-up' : null}
                />
              </span>
            ) : (
              <span className="arrow" />
            )}
            {depthLevel >= 1 ? (
              <span>
                <KeyboardArrowRightIcon
                  className={dropdown ? 'rotatte-arr' : 'arrow'}
                />
              </span>
            ) : (
              <span className="arrow" />
            )}

            <DropDown
              submenu={menu?.submenu}
              dropdown={dropdown}
              depthLevel={depthLevel}
            />
          </Link>
        </li>
      ) : (
        <li class="nav-item">
          <Link class="nav-link  d-flex" to={'/'}>
            {menu?.title}
          </Link>
        </li>
      )}
    </>
  )
}

export default MenuItem
