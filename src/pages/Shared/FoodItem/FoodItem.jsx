import { Link } from "react-router-dom";

const FoodItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <>
      <div className="card bg-[#F3F3F3] rounded-none">
        <div>
          <img src={image} alt={name} />
          <p className="absolute top-4 right-4 bg-[#111827] px-4 py-1 text-white">
            ${price}
          </p>
        </div>
        <div className="card-body items-center text-center space-y-3">
          <h2 className="card-title">{name}</h2>
          <p className="leading-8">{recipe.slice(0, 50)}</p>
          <div className="card-actions text-[#BB8506]">
            <Link className="btn btn-outline uppercase bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4">
              Add to card
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodItem;
