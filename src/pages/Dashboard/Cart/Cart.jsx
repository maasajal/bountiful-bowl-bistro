import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.delete(`/carts/${id}`);
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `An error occurred: ${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    }
  };
  return (
    <>
      <SectionTitle heading={"Wanna add more?"} subHeading={"My Cart"} />
      <section className="mx-24 p-10 bg-white">
        <div className="flex justify-between uppercase items-center font-Cinzel font-bold">
          <h2 className="text-3xl">Total Orders: {cart.length} </h2>
          <h2 className="text-3xl">Total Price: ${totalPrice} </h2>
          <button className="btn bg-[#D1A054] text-white uppercase">Pay</button>
        </div>
        <div className="overflow-x-auto py-8">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th></th>
                <th>Item image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost bg-red-600 text-white text-xl"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default Cart;
