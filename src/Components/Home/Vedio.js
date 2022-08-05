import React from 'react'

const Vedio = () => {
  return (
    <>
      <iframe
        class="responsive-iframe"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/bqkQAlna2P8"
        title="YouTube video player"
        frameborder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </>
  )
}

export default Vedio
