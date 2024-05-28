import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const getMenu = async () => {
    try {
      const { data } = await axiosSecure.get("/menu");
      setMenu(data);
      setLoading(false);
    } catch (error) {
      console.error("error:", error);
    }
  };
  useEffect(() => {
    getMenu();
  }, []);

  return [menu, loading];
};
export default useMenu;
