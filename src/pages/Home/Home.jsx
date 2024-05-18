import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
        <Category />
        <PopularMenu />
        <ChefRecommends />
      </div>
    </>
  );
};
export default Home;
