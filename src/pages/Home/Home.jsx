import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="max-w-5xl mx-auto px-2 md:px-4 py-20">
        <h1 className="text-5xl font-Cinzel font-bold text-black">Home</h1>
        <Category />
      </div>
    </>
  );
};
export default Home;
