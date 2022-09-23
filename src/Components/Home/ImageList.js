import React from 'react'
import { Row, Col } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import Lightbox from 'react-image-lightbox'
const option = {
  margin: 4,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 1,
    },
  },
}

const ImageListm = ({ popularTour }) => {
  const [currentImage, setCurrentImage] = useState(null)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  console.log(currentImage, 'fdf')
  return (
    <>
      <OwlCarousel className="owl-theme  modal-img-slide" {...option}>
        {popularTour?.map((source, index) => {
          console.log(source)
          return (
            <div className="modal-img" key={`modal_${index}`}>
              <img
                src={source.img}
                alt=""
                className="img-fluid"
                onClick={
                  () => alert('hello')
                  // setIsViewerOpen(!isViewerOpen)
                  // setCurrentImage(index)
                }
              />
            </div>
          )
        })}
        {isViewerOpen && (
          <Lightbox
            mainSrc={modalImage[currentImage]}
            onCloseRequest={() => setIsViewerOpen(false)}
          />
        )}
      </OwlCarousel>
    </>
  )
}

export default ImageListm
