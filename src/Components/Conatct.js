import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from './UseScroll'
import { contactBanner } from '../animation/Animation'
import InputField from './reuableComponent/InputField'
const Conatct = () => {
  const [element, controls] = useScroll()
  return (
    <>
      <section className="conatct">
        <div className="contact-banner about-banner">
          <img
            src="https://www.discoveryworldtrekking.com/media/2619/nepal-trek.png"
            alt=""
            className="img-fluid"
          />
          <div className="bottom-img">
            <img
              src="https://www.discoveryworldtrekking.com/frontend/assets/images/banner-trekker.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="container">
          <div className="contact-1">
            <div className="contact-1-inner">
              <h1 className="text-center">Contact us</h1>
              <div className="row">
                <div className="col-md-6">
                  <h5>Zero degree travel and tours</h5>
                  <h6>Paul Gurung (CEO/Founder)</h6>
                  <p>Mailing Address: Post Box:21576, Kaldhara Marg, Thamel</p>
                  <ul>
                    <li>
                      <span>Phone:</span>+977 1 4252366
                    </li>

                    <li>
                      <span> E-Mail:</span> dulalsuman853@gmail.com
                    </li>
                    <li>
                      <span> Skype:</span> zerodegree1120
                    </li>
                    <li>
                      <span> Location:</span> Saat Ghumti Chowk, On the way to
                      Kaldhara Marg, Near to the International Guest House,
                      Kaldhara, Thamel, Kathmandu, Nepal. [Opening hours – 8 Am
                      to 7 Pm]
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Any Quries? Let US Know</h5>
                  <form action="">
                    <div className="mt-4">
                      <label htmlFor="">
                        Full Name <span>*</span>
                      </label>
                      <InputField
                        type="text"
                        Placeholder="Your name"
                        inputCss="contact-input"
                        name="fullname"
                        // onChange={handleChange}
                        // value={enquery.fullname}
                      />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="">
                        Email Address <span>*</span>
                      </label>
                      <InputField
                        type="text"
                        Placeholder="example@gmail.com"
                        inputCss="contact-input"
                        name="fullname"
                        // onChange={handleChange}
                        // value={enquery.fullname}
                      />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="">
                        Contact Number<span>*</span>
                      </label>

                      <InputField
                        type="text"
                        Placeholder="Contact Number"
                        inputCss="contact-input"
                        name="fullname"
                        // onChange={handleChange}
                        // value={enquery.fullname}
                      />
                    </div>
                    <div className="mt-4 ">
                      <label htmlFor="">
                        Your message<span>*</span>
                      </label>
                      <div>
                        <textarea
                          name="message"
                          id=""
                          cols="10"
                          // value={enquery.message}
                          rows="4"
                          Placeholder="Message"
                          className="contact-input"
                          // onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-end mt-4">
                      <button className="contact-send ">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container mt-5">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=thamel&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Conatct
