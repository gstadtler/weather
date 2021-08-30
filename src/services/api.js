import axios from "axios";

const API_KEY = "202174702aa670c3e7ef10d429ba58b8";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: API_KEY,
  },
});
