import React from 'react'

const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="about-banner">
          <img
            className="img-fluid"
            src="https://www.luxuryholidaynepal.com/uploads/articles/images/Gokyo-lakes-trek-by-luxury-holidays-nepal.jpg"
            alt=""
          />
          <div className="bottom-img">
            <img
              src="https://www.discoveryworldtrekking.com/frontend/assets/images/banner-trekker.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="about-content">
            <h1 initial={{ opacity: 0 }} whileInView={{ x: 1 }}>
              About us
            </h1>
          </div>
        </div>
        <div className="container">
          <h1 className="text-center">Explore Our Travel Blog</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: '100%' }}>
                <img
                  src="https://www.luxuryholidaynepal.com/uploads/articles/images/Gokyo-lakes-trek-by-luxury-holidays-nepal.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Eight best viewpoints in Nepal</h5>
                  <p className="card-text">
                    Nepal, a mountainous country, is home to some of the highest
                    mountains in the world. In fact, you can find eight of the
                    world&rsquo;s ten highest mountains here. The Himalayan fold
                    mountains have dist...
                  </p>
                  <a href="#" className=" btn-continue">
                    Continue Reading...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
