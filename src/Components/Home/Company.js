import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
const Company = () => {
  return (
    <>
      <div className="company-detail">
        <Container>
          <h1>
            <span>Zero Degree Travel and Tour</span> - Best Travel
            <br /> and Trekking Agency in Nepal
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p>
            We and our partners store and/or access information on a device,
            such as cookies and process personal data, such as unique
            identifiers and standard information sent by a device for
            personalised ads and content, ad and content measurement, and
            audience insights, as well as to develop and improve products.With
            your permission we and our partners may use precise geolocation data
            and identification through device scanning. You may click to consent
            to our and our partners’ processing as described above.
            Alternatively you may access more detailed information and change
            your preferences before consenting or to refuse consenting.Please
            note that some processing of your personal data may not require your
            consent, but you have a right to object to such processing. Your
            preferences will apply to this website only. You can change your
            preferences at any time by returning to this site or visit our
            privacy policy.
          </p>
          <div className="com-btn text-center mt-5">
            <button className="c-btn">
              View Detail of Our Company
              <ArrowRightAltIcon className="ar-icon right-arr" />
            </button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Company
