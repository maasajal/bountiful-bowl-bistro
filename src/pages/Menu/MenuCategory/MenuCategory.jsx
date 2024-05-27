import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <>
      {title && (
        <Cover
          bgCoverImg={img}
          title={title}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi."
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to={`/order/${title}`}
          className="btn uppercase btn-outline border-0 border-b-4 mt-5"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </>
  );
};
export default MenuCategory;
