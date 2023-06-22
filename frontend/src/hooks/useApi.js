import axios from "axios";

export default function UseApi() {
  return axios.create({
    baseURL: process.env.REACT_APP_AUTH_URL,
    withCredentials: true,
    headers: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
}
