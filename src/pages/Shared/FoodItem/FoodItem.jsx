import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodItem = ({ item }) => {
  const { _id, name, image, recipe, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = async () => {
    if (user && user.email) {
      const cartItem = {
        foodId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      const { data } = await axiosSecure.post("/carts", cartItem);
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to cart!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } else {
      Swal.fire({
        title: "You are not login!",
        text: "Please login for add to cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <Link
              onClick={handleAddToCart}
              className="btn btn-outline uppercase bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4"
            >
              Add to card
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodItem;
