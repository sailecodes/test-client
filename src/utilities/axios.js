import axios from "axios";

const axiosc = axios.create({
  baseURL: "/api/v1",
});

export default axiosc;
