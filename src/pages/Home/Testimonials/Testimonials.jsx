import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const getReviewsData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5555/reviews");
      setReviews(data);
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getReviewsData();
  }, []);
  return (
    <section className="my-16">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="text-center px-28 space-y-3">
              <Rating
                className="mx-auto mb-10 w-40"
                value={item.rating}
                readOnly
              />
              <q className="text-[#444444]">{item.details}</q>
              <h3 className="text-[#CD9003] uppercase">{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
