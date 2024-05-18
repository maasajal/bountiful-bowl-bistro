import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";
const PopularMenu = () => {
  const [popularMenu, setPopularMenu] = useState([]);

  const getPopularMenu = async () => {
    try {
      const { data } = await axios.get("./menu.json");
      const popularItems = data.filter((item) => item.category === "popular");
      setPopularMenu(popularItems);
    } catch (error) {
      console.error("error:", error);
    }
  };
  useEffect(() => {
    getPopularMenu();
  }, []);

  return (
    <>
      <section className="my-14">
        <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {popularMenu.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center py-10">
          <Link className="btn uppercase btn-outline border-0 border-b-4">
            View Full Menu
          </Link>
        </div>
      </section>
    </>
  );
};
export default PopularMenu;
