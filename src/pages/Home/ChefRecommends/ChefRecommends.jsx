// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import FoodItem from "../../Shared/FoodItem/FoodItem";

const ChefRecommends = () => {
  const [foodItem, setFoodItem] = useState([]);
  const getFoodItem = async () => {
    try {
      const { data } = await axios.get("./menu.json");
      setFoodItem(data);
    } catch (error) {
      console.error("error:", error);
    }
  };
  useEffect(() => {
    getFoodItem();
  }, []);
  return (
    <div className="">
      <SectionTitle heading={"Chef Recommends"} subHeading={"Should Try"} />
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper"
      >
        {foodItem.map((item) => (
          <SwiperSlide key={item._id}>
            <FoodItem item={item} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div className="relative">
            <img src={slide1} alt="Category slide" />
            <h3 className="uppercase text-center font-Cinzel text-2xl absolute bottom-6 left-16">
              Salads
            </h3>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
export default ChefRecommends;
