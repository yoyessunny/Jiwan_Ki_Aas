import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import slide1 from '../assets/counselling.jpg'
import slide3 from '../assets/about-img2.png'
import slide4 from '../assets/about-img3.png'
import slide5 from '../assets/about-img4.png'

function PresentationCarousel() {
  return (
    <section className="presentation">

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="presentation__swiper"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide1}
              alt="Drug De-addiction Counselling"
            />

          </div>
        </SwiperSlide>


        {/* Slide 3 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide3}
              alt="Recovery and Wellness"
            />

          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide4}
              alt="Rehabilitation Services"
            />

          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide5}
              alt="Rehabilitation Services"
            />

          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default PresentationCarousel
