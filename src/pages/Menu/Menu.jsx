import Cover from "../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

import banner from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  return (
    <>
      <Cover
        bgCoverImg={banner}
        title="Our Menu"
        content="Would you like to try a dish?"
        style="pt-24"
      />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
        <PopularMenu />
        <Cover
          bgCoverImg={dessertBg}
          title="Desserts"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
        />
        <PopularMenu />
        <Cover
          bgCoverImg={pizzaBg}
          title="Pizzas"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
        />
        <PopularMenu />
        <Cover
          bgCoverImg={saladBg}
          title="Salads"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
        />
        <PopularMenu />
        <Cover
          bgCoverImg={soupBg}
          title="Soups"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
        />
        <PopularMenu />
      </div>
    </>
  );
};
export default Menu;
