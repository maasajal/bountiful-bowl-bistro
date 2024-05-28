import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5555",
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
