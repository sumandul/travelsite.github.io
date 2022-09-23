import React, { useState } from 'react'
import InputField from '../reuableComponent/InputField'
import TextArea from '../reuableComponent/TextArea'
import DatePickerComponent from '../utilities/DatePicker'
import { useDispatch } from 'react-redux'
import { postQuery } from '../../redux/Reducer'
const EnqueryForm = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    date: '',
  })
  const handleText = (e) => {
    console.log(e.target.value)
  }
  const [date, setDate] = useState()
  const handleChnge = (e) => {
    const value = e.target.value
    setUser({ ...user, [e.target.name]: value })
  }
  const queryForm = (e) => {
    e.preventDefault()
    let query = new FormData()

    query.append('name', user.name)
    query.append('email', user.email)
    query.append('contact', user.contact)
    query.append('message', user.message)
    query.append('date', date)
    dispatch(postQuery(query))
  }
  const handleDate = (e) => {
    setDate(e)
  }
  return (
    <>
      <div className="enquery-form mt-3">
        <form action="" onSubmit={queryForm}>
          <div className="mb-3">
            <InputField
              type={'text'}
              name="name"
              value={user.name}
              Placeholder="Full Name"
              inputCss="style-input"
              onChange={handleChnge}
            />
          </div>
          <div className="mb-3">
            <InputField
              type={'text'}
              name="email"
              value={user.email}
              Placeholder="E-mail"
              inputCss="style-input"
              onChange={handleChnge}
            />
          </div>
          <div className="mb-3">
            <InputField
              type={'text'}
              name="contact"
              value={user.contact}
              Placeholder="Phone Number"
              inputCss="style-input"
              onChange={handleChnge}
            />
          </div>
          <div className="mb-3">
            <DatePickerComponent
              name="date"
              placeholderText="Booking date"
              style="select-date"
              selected={date}
              onChange={handleDate}
            />
          </div>
          <div className="mb-3">
            <TextArea
              placeholder="Message"
              name="message"
              value={user.message}
              onChange={handleChnge}
            />
          </div>

          <button type="submit" className="query-send">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default EnqueryForm
