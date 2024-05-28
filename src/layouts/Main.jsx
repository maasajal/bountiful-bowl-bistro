import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  return (
    <div className="font-Inter">
      {noHeaderFooter || <NavBar />}
      <div>
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};
export default Main;
