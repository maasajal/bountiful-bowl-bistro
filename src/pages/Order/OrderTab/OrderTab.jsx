import FoodItem from "../../Shared/FoodItem/FoodItem";

const OrderTab = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {items.map((item) => (
          <FoodItem key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};
export default OrderTab;
