import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerComponent = ({ style, placeholderText, Icon }) => {
  const [startDate, setStartDate] = useState()
  return (
    <>
      <div className="d-flex align-items-center position-relative">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className={style}
          placeholderText={placeholderText}
        />
        <div>{Icon}</div>
      </div>
    </>
  )
}

export default DatePickerComponent
