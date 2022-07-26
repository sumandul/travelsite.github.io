import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
const Select = ({ data, selectcss = '' }) => {
  console.log(selectcss, 'ee')
  const handleChange = (event) => {
    // let selectedValue = event.target.value
    // this.props.onSelectChange(selectedValue)
  }

  let options = data.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ))
  return (
    <>
      <select name={'suman'} className={'selectcss'} onChange={handleChange}>
        {' '}
        <option className="place-css">Short by:</option>
        {options}
      </select>
      <ArrowDropDownIcon className="filter-down" />
    </>
  )
}

export default Select
