// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <div className="mb-10">
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white pb-10"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={slide1} alt="Category slide" />
            <h3 className="uppercase text-center font-Cinzel text-2xl absolute bottom-6 left-16">
              Salads
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide2} alt="Category slide" />
            <h3 className="uppercase text-center font-Cinzel text-2xl absolute bottom-6 left-16">
              Pizzas
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide3} alt="Category slide" />
            <h3 className="uppercase text-center font-Cinzel text-2xl absolute bottom-6 left-16">
              Soups
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide4} alt="Category slide" />
            <h3 className="uppercase text-center font-Cinzel text-2xl absolute bottom-6 left-16">
              Desserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={slide5} alt="Category slide" />
            <h3 className="uppercase text-center font-Cinzel text-2xl absolute bottom-6 left-16">
              Salads
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Category;
