import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-5xl mx-auto px-2 md:px-4 py-16">
        <Category />
      </div>
    </>
  );
};
export default Home;
