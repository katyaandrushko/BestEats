import FeedbackCard from './FeedbackCard'
import './Testimonials.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'

const data = [
  {
    id: 'feedback-1',
    content:
      'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
    name: 'імя прізв',
    title: '@нікнейм',
    img: 'https://i.imgur.com/Dn0qoCG.png',
  },
  {
    id: 'feedback-2',
    content:
      'dhsvf  dhjfbdshjfvsd hdsbfdnsbfvhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdsky.',
    name: '@нікнейм',
    title: 'імя прізв',
    img: 'https://i.imgur.com/fk8eEvW.png',
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: 'https://i.imgur.com/dLxxRDy.png',
  },
  {
    id: 'feedback-1',
    content:
      'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
    name: 'імя прізв',
    title: '@нікнейм',
    img: 'https://i.imgur.com/Dn0qoCG.png',
  },
  {
    id: 'feedback-1',
    content:
      'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
    name: 'імя прізв',
    title: '@нікнейм',
    img: 'https://i.imgur.com/Dn0qoCG.png',
  },
  {
    id: 'feedback-1',
    content:
      'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
    name: 'імя прізв',
    title: '@нікнейм',
    img: 'https://i.imgur.com/Dn0qoCG.png',
  },
  {
    id: 'feedback-1',
    content:
      'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
    name: 'імя прізв',
    title: '@нікнейм',
    img: 'https://i.imgur.com/Dn0qoCG.png',
  },
  {
    id: 'feedback-1',
    content:
      'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
    name: 'імя прізв',
    title: '@нікнейм',
    img: 'https://i.imgur.com/Dn0qoCG.png',
  },
]

function Testimonials() {
  return (
    <>
      <section
      // id="clients"
      // className={`sm:py-16 py-6 flex justify-center items-center flex-col relative`}
      >
        {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}

        {/* <div className="w-full flex justify-center text-center flex-col sm:mb-16 mb-6 relative z-[1]"> */}
        {/* <h2
          className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`}
        >
          Що кажуть наші учні
        </h2> */}
        {/* </div> */}
        {/* <Carousel autoplay autoplayInterval={3000} wrapAround={true}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel> */}

        <div className="swip">
          <Swiper
            className="swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={100}
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {data.map((d) => (
              <SwiperSlide className="iiii">
                <div className="smdns">
                  <div className="recti">
                    <div className="iiimg">
                      <img src={d.img} alt="" />
                    </div>

                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>
                    <p>{d.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Testimonials
