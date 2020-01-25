import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:3333"
});

export default baseURL;
