import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMenu = async () => {
    try {
      const { data } = await axios.get("http://localhost:5555/menu");
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
