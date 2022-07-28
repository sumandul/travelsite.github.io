import React from 'react'
import { Placeholder } from 'react-bootstrap'

const InputField = ({ type, Placeholder, inputCss }) => {
  return (
    <>
      <input type={type} placeholder={Placeholder} className={inputCss} />
    </>
  )
}

export default InputField
