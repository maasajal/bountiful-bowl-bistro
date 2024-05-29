import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });
  const handleMakeAdmin = async (user) => {
    try {
      const { data } = await axiosSecure.patch(`/users/admin/${user._id}`);
      console.log(data);
      if (data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${user.name} is admin now!`,
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error", error);
      Swal.fire({
        title: "Error!",
        text: `An error occurred: ${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.delete(`/users/${id}`);
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
      <SectionTitle heading={"Manage all users"} subHeading={"How Many??"} />
      <section className="mx-24 p-10 bg-white">
        <h2 className="text-3xl font-Cinzel font-bold uppercase">
          Total Users: {users.length}{" "}
        </h2>
        <div className="overflow-x-auto py-8">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-[#D1A054] text-white text-xl"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
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
export default AllUsers;
