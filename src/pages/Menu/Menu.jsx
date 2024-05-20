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
          <Cover
            bgCoverImg={dessertBg}
            title="Desserts"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
          />
          <MenuCategory items={dessert} />
        </section>
        <section className="my-24 space-y-12">
          <Cover
            bgCoverImg={pizzaBg}
            title="Pizzas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
          />
          <MenuCategory items={pizza} />
        </section>
        <section className="my-24 space-y-12">
          <Cover
            bgCoverImg={saladBg}
            title="Salads"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
          />
          <MenuCategory items={salad} />
        </section>
        <section className="my-24 space-y-12">
          <Cover
            bgCoverImg={soupBg}
            title="Soups"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
          />
          <MenuCategory items={soup} />
        </section>
      </div>
    </>
  );
};
export default Menu;
