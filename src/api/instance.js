import axios from "axios";

const instance = axios.create({
  baseURL: "https://sellpoint-b2b.herokuapp.com/uk/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
