import { Link, NavLink } from "react-router-dom";
import profilePic from "../../../assets/logo.png";
import logo from "../../../assets/bbb-logo.png";
import "./Navbar.css";
const NavBar = () => {
  const navLinks = (
    <>
      <li key="home" className="hover:text-[#EEFF25]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key="contact" className="hover:text-[#EEFF25]">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li key="dashboard" className="hover:text-[#EEFF25]">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li key="menu" className="hover:text-[#EEFF25]">
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li key="order" className="hover:text-[#EEFF25]">
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
    </>
  );
  return (
    <>
      <header className="navbar py-4 md:px-14 bg-[#15151580] text-white font-extrabold fixed z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#EEFF25]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#15151580] rounded-box w-52 uppercase"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost h-full w-40">
            <img src={logo} alt="company logo" />
          </a>
        </div>
        <div className="navbar items-center justify-end gap-2 md:gap-4">
          <ul className="menu menu-horizontal px-1 hidden lg:flex uppercase">
            {navLinks}
          </ul>
          <div className="w-10 rounded-full">
            <img src={profilePic} alt="Cart" />
          </div>
          <Link
            to="/login"
            className="btn btn-outline px-5 text-white font-extrabold"
          >
            Login
          </Link>
          <Link
            to="/"
            className="btn btn-outline px-5 text-white font-extrabold"
          >
            Sign Out
          </Link>
          <div className="dropdown dropdown-end mr-1 tooltip tooltip-bottom tooltip-primary z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={profilePic} alt="Logged user photo" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li>
                <NavLink to="/user-profile" className="py-3 hover:text-white">
                  User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/update-profile" className="py-3 hover:text-white">
                  Update Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;
