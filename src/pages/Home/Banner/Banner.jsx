import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bannerSlide1 from "../../../assets/home/01.jpg";
import bannerSlide2 from "../../../assets/home/02.jpg";
import bannerSlide3 from "../../../assets/home/03.png";
import bannerSlide4 from "../../../assets/home/04.jpg";
import bannerSlide5 from "../../../assets/home/05.png";
import bannerSlide6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop className="text-center">
        <div>
          <img src={bannerSlide1} />
        </div>
        <div>
          <img src={bannerSlide2} />
        </div>
        <div>
          <img src={bannerSlide3} />
        </div>
        <div>
          <img src={bannerSlide4} />
        </div>
        <div>
          <img src={bannerSlide5} />
        </div>
        <div>
          <img src={bannerSlide6} />
        </div>
      </Carousel>
    </>
  );
};
export default Banner;
