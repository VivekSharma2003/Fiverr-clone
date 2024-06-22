import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-clone-api-b945.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;