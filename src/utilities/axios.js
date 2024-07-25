import axios from "axios";

const axiosc = axios.create({
  baseURL: "https://saile-test-server.up.railway.app/api/v1",
});

export default axiosc;
