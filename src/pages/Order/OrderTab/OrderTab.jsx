import FoodItem from "../../Shared/FoodItem/FoodItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./OrderTab.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    type: "fraction",
    clickable: true,
  };
  const itemsPerPage = 6;
  const pages = Array.from(
    { length: Math.ceil(items.length / itemsPerPage) },
    (v, i) => items.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );

  return (
    <>
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {pages.map((pageItems, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 mb-8">
              {pageItems.map((item) => (
                <FoodItem key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
            {items.map((item) => (
              <FoodItem key={item._id} item={item} />
            ))}
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
export default OrderTab;
