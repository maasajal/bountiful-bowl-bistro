import { Link } from "react-router-dom";

const FoodItem = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-body items-center text-center space-y-3">
          <h2 className="card-title">{name}</h2>
          <p className="leading-8">{recipe.slice(0, 50)}</p>
          <div className="card-actions text-[#BB8506]">
            <Link className="btn btn-outline uppercase text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4">
              Add to card
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodItem;
