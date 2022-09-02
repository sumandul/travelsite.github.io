import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import DropDown from './DropDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { AnimatePresence, motion } from 'framer-motion'
const MenuItem = ({ menu, depthLevel }) => {
  const ref = useRef()
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {}, [dropdown])

  const [windowSize, setWindowSize] = useState()

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
  const onMouseEnter = () => {
    setDropdown(true)
  }

  const onMouseLeave = () => {
    setDropdown(false)
  }
  return (
    <>
      {menu?.submenu ? (
        <AnimatePresence>
          <motion.li
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            class="nav-item"
            ref={ref}
          >
            <Link
              className="nav-link active d-flex align-items-center mb-menu"
              to={'/trip'}
              onClick={
                depthLevel + 1 === depthLevel
                  ? () => setDropdown(false)
                  : () => setDropdown(true)
              }
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {menu?.title}
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
          </motion.li>
        </AnimatePresence>
      ) : (
        <li class="nav-item">
          <Link class="nav-link  d-flex" to={`/${menu.path}`}>
            {menu?.title}
          </Link>
        </li>
      )}
    </>
  )
}

export default MenuItem
