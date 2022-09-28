import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="about-banner">
          <img
            className="img-fluid"
            src="https://www.discoveryworldtrekking.com/media/2619/nepal-trek.png"
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
            <h1 initial={{ opacity: 0 }} whileInView={{ x: 1 }}></h1>
          </div>
        </div>
        <div className="container">
          <h1 className="text-center mt-5">Explore Our Travel Blog</h1>
          <div className="row gy-5 my-5">
            <div className="col-md-4">
              <div className="card" style={{ width: '100%' }}>
                <img
                  className="card-img-top img-fluid"
                  alt="..."
                  src=" https://www.greatholidaysnepal.com/assets/images/nepal/ghorepani-poonhill-trek.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Eight best viewpoints in Nepal</h5>
                  <p className="card-text">
                    Nepal, a mountainous country, is home to some of the highest
                    mountains in the world. In fact, you can find eight of the
                    world&rsquo;s ten highest mountains here. The Himalayan fold
                    mountains have dist...
                  </p>
                  <button className=" btn-continue">
                    <Link to={''}>Continue Reading...</Link>
                  </button>
                </div>
              </div>
            </div>
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
                  <button className=" btn-continue">
                    <Link to={''}>Continue Reading...</Link>
                  </button>
                </div>
              </div>
            </div>
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
                  <button className=" btn-continue">
                    <Link to={''}>Continue Reading...</Link>
                  </button>
                </div>
              </div>
            </div>
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
                  <button className=" btn-continue">
                    <Link to={''}>Continue Reading...</Link>
                  </button>
                </div>
              </div>
            </div>
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
                  <button className=" btn-continue">
                    <Link to={''}>Continue Reading...</Link>
                  </button>
                </div>
              </div>
            </div>
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
                  <button className=" btn-continue">
                    <Link to={''}>Continue Reading...</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="vew-more">Load more Blog</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
