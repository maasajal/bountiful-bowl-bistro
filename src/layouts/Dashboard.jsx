import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/bbb-logo.png";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaRegCalendarCheck,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { FaFaceGrinStars } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="flex">
        <div className="w-64 min-h-screen px-8 pt-12 bg-[#D1A054] space-y-8">
          <img src={logo} alt="company logo" className="mb-16" />
          {isAdmin ? (
            <>
              <ul className="uppercase space-y-4">
                <li key="admin-home" className="hover:text-white">
                  <NavLink
                    to="/dashboard/adminHome"
                    className="flex items-center gap-2"
                  >
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li key="add-items" className="hover:text-white">
                  <NavLink
                    to="/dashboard/addItems"
                    className="flex items-center gap-2"
                  >
                    <FaUtensils /> Add Items
                  </NavLink>
                </li>
                <li key="manage-items" className="hover:text-white">
                  <NavLink
                    to="/dashboard/manageItems"
                    className="flex items-center gap-2"
                  >
                    <FaList /> Manage Items
                  </NavLink>
                </li>
                <li key="manage-bookings" className="hover:text-white">
                  <NavLink
                    to="/dashboard/manageBookings"
                    className="flex items-center gap-2"
                  >
                    <FaBook /> Manage Bookings
                  </NavLink>
                </li>
                <li key="all-users" className="hover:text-white">
                  <NavLink
                    to="/dashboard/allUsers"
                    className="flex items-center gap-2"
                  >
                    <FaUsers /> All Users
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="uppercase space-y-4">
                <li key="userHome" className="hover:text-white">
                  <NavLink
                    to="/dashboard/userHome"
                    className="flex items-center gap-2"
                  >
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li key="reservation" className="hover:text-white">
                  <NavLink
                    to="/dashboard/reservation"
                    className="flex items-center gap-2"
                  >
                    <FaCalendarAlt /> Reservation
                  </NavLink>
                </li>
                <li key="paymentHistory" className="hover:text-white">
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className="flex items-center gap-2"
                  >
                    <FaWallet /> Payment History
                  </NavLink>
                </li>
                <li key="cart" className="hover:text-white">
                  <NavLink
                    to="/dashboard/cart"
                    className="flex items-center gap-2"
                  >
                    <FaShoppingCart /> My Cart
                  </NavLink>
                </li>
                <li key="review" className="hover:text-white">
                  <NavLink
                    to="/dashboard/addReview"
                    className="flex items-center gap-2"
                  >
                    <FaFaceGrinStars /> Add Review
                  </NavLink>
                </li>
                <li key="booking" className="hover:text-white">
                  <NavLink
                    to="/dashboard/booking"
                    className="flex items-center gap-2"
                  >
                    <FaRegCalendarCheck /> My Booking
                  </NavLink>
                </li>
              </ul>
            </>
          )}
          <hr />
          <ul className="uppercase space-y-4">
            <li key="home" className="hover:text-white">
              <NavLink to="/" className="flex items-center gap-2">
                <FaHome /> Home
              </NavLink>
            </li>
            <li key="menu" className="hover:text-white">
              <NavLink to="/menu" className="flex items-center gap-2">
                <TiThMenu /> Menu
              </NavLink>
            </li>
            <li key="order" className="hover:text-white">
              <NavLink to="/order/salad" className="flex items-center gap-2">
                <FaShoppingBag /> Order
              </NavLink>
            </li>
            <li key="contact" className="hover:text-white">
              <NavLink to="/contact" className="flex items-center gap-2">
                <MdEmail /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 py-20 bg-[#F6F6F6]">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
