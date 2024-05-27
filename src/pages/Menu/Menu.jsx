import { useParams } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

import banner from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <>
      <Cover
        bgCoverImg={banner}
        heading="Our Menu"
        headingText="Would you like to try a dish?"
        style="pt-24"
      />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
        <section>
          <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"} />
          <MenuCategory items={offered} />
        </section>
        <section className="my-24 space-y-12">
          <MenuCategory items={dessert} img={dessertBg} title="dessert" />
        </section>
        <section className="my-24 space-y-12">
          <MenuCategory items={pizza} img={pizzaBg} title="pizza" />
        </section>
        <section className="my-24 space-y-12">
          <MenuCategory items={salad} img={saladBg} title="salad" />
        </section>
        <section className="my-24 space-y-12">
          <MenuCategory items={soup} img={soupBg} title="soup" />
        </section>
      </div>
    </>
  );
};
export default Menu;
