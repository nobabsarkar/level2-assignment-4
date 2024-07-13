// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import caoursel1 from "../../../assets/carousel/keyboard1.png";
import caoursel2 from "../../../assets/carousel/carousel2.jpg";
import caoursel3 from "../../../assets/carousel/2.jpg";
import caoursel5 from "../../../assets/carousel/5.jpg";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mb-10"
    >
      <SwiperSlide>
        <img className="w-full h-[500px] " src={caoursel5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[500px] " src={caoursel3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[500px] " src={caoursel2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-[500px] " src={caoursel1} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
