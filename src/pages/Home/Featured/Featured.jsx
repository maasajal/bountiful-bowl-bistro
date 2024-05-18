import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <section
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="bg-center bg-fixed"
    >
      <div className="bg-black bg-opacity-50">
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-20 text-white">
          <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
            <img className="" src={featuredImg} alt="Featured image" />
            <div className="">
              <p>March 20, 2023</p>
              <h3>WHERE CAN I GET SOME?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <Link className="btn uppercase btn-outline border-0 border-b-4 text-white mt-5">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
