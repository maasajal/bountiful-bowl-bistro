import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
        <Category />
        <PopularMenu />
        <section className="bg-[#151515] text-white py-20 text-center font-Raleway text-3xl mb-20">
          <p>
            Call Us:
            <a href="callto:+880192345678910"> +88 0192345678910</a>
          </p>
        </section>
        <ChefRecommends />
      </div>
      <Featured />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
        <Testimonials />
      </div>
    </>
  );
};
export default Home;
