// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import testimonial1 from "../../../assets/testimonial/1.webp";
import testimonia2 from "../../../assets/testimonial/2.jpg";
import testimonial3 from "../../../assets/testimonial/3.jpg";
import testimonial4 from "../../../assets/testimonial/4.jpg";
import testimonial5 from "../../../assets/testimonial/5.jpeg";

const Testimonial = () => {
  return (
    <div className="mt-28 bg-slate-200 py-10">
      <div className="w-1/2 mx-auto mb-10">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          What Customar Saying About Us
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          eius ratione et earum corrupti rem!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-center text-yellow-400 pt-6">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
            <p className="p-5 text-center">
              Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
              tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
              integer at. Nunc nunc eu arcu amet faucibus.
            </p>
            <div className="flex items-center justify-center pb-5">
              <img
                className="mr-2"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  border: "3px solid orange",
                }}
                src={testimonial1}
                alt=""
              />
              <h1 className="text-2xl font-bold">Mery Jussy</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-center text-yellow-400 pt-6">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
            <p className="p-5 text-center">
              Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
              tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
              integer at. Nunc nunc eu arcu amet faucibus.
            </p>
            <div className="flex items-center justify-center pb-5">
              <img
                className="mr-2"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  border: "3px solid orange",
                }}
                src={testimonia2}
                alt=""
              />
              <h1 className="text-2xl font-bold">Harris Johnson</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-center text-yellow-400 pt-6">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
            <p className="p-5 text-center">
              Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
              tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
              integer at. Nunc nunc eu arcu amet faucibus.
            </p>
            <div className="flex items-center justify-center pb-5">
              <img
                className="mr-2"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  border: "3px solid orange",
                }}
                src={testimonial3}
                alt=""
              />
              <h1 className="text-2xl font-bold">Durso Raeen</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-center text-yellow-400 pt-6">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
            <p className="p-5 text-center">
              Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
              tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
              integer at. Nunc nunc eu arcu amet faucibus.
            </p>
            <div className="flex items-center justify-center pb-5">
              <img
                className="mr-2"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  border: "3px solid orange",
                }}
                src={testimonial4}
                alt=""
              />
              <h1 className="text-2xl font-bold">Mac Bunnof</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-center text-yellow-400 pt-6">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
            <p className="p-5 text-center">
              Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
              tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
              integer at. Nunc nunc eu arcu amet faucibus.
            </p>
            <div className="flex items-center justify-center pb-5">
              <img
                className="mr-2"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  border: "3px solid orange",
                }}
                src={testimonial5}
                alt=""
              />
              <h1 className="text-2xl font-bold">Jack Bee</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
