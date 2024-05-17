import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
