import React, { useState } from 'react'
import Select from 'react-select'

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    borderRadius: 0,
    borderBottom: ' 1px solid #e5e5e5 !important',
    // This line disable the blue border
    '&:hover': {
      border: 0,
    },
    boxShadow: 'none',
  }),
}
const SelecteComponent = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={style}
      />
    </>
  )
}

export default SelecteComponent
