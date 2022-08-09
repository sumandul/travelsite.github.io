import React from 'react'
import MenuItem from './MenuItem'
const DropDown = ({ submenu, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1
  // console.log(depthLevel, 'drop')

  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''
  return (
    <>
      <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
        {submenu?.map((sub, index) => (
          <MenuItem menu={sub} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    </>
  )
}

export default DropDown
