import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import slide1 from '../assets/JKA_Intro1.png'
import slide3 from '../assets/JKA_Intro2.png'
import slide4 from '../assets/JKA_Intro3.png'
import slide5 from '../assets/JKA_Intro4.png'
import slide6 from '../assets/JKA_Intro5.png'
import slide7 from '../assets/JKA_Intro6.png'
import slide8 from '../assets/JKA_Intro7.png'
import slide9 from '../assets/JKA_Intro8.png'


function PresentationCarousel2() {
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

{/* Slide 6 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide6}
              alt="Drug De-addiction Counselling"
            />

          </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide7}
              alt="Drug De-addiction Counselling"
            />

          </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide8}
              alt="Drug De-addiction Counselling"
            />

          </div>
        </SwiperSlide>

{/* Slide 9 */}
        <SwiperSlide>
          <div className="presentation__slide">
            <img
              src={slide9}
              alt="Drug De-addiction Counselling"
            />

          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default PresentationCarousel2
