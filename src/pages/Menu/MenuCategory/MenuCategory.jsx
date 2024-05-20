import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};
export default MenuCategory;
