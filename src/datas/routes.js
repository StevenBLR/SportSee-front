import axios from "axios";

const port = 3030;
const axInstance = axios.create({
  baseURL: `http://localhost:${port}`,
});
