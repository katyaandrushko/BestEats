import React from 'react'
import { useSwiper } from 'swiper/react'
import './swiperNavButtons.css'

const SwiperNavButtons = () => {
  const swiper = useSwiper()

  return (
    <div className="swiper-nav-btns">
      <button className="swiper-nav-btns" onClick={() => swiper.slidePrev()}>
        Prev
      </button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  )
}

export default SwiperNavButtons
