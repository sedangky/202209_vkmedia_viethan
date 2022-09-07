// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-cube";

export default () => {
  return (
    <>
        <Swiper
          modules={[EffectCube, Autoplay, Pagination]}
          effect={"cube"}
          grabCursor={true}
          centeredSlides={true}
          // slidesPerView={3}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.8,
          }}
          loop={true}
          autoplay={{delay:3500}}
          speed={1000}
          pagination={true}
          className="s2 mb-8 max-w-xl"
        >
          <SwiperSlide>
            <div className="h-48 bg-green-300">slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-48 bg-green-300">slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-48 bg-green-300">slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-48 bg-green-300">slide 4</div>
          </SwiperSlide>
        </Swiper>

    </>
  );
};