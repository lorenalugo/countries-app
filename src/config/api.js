import axios from "axios";

const API = async (path) => {
  try {
    const { data } = await axios.get(`https://restcountries.com/v3.1${path}`);
    return data;
  } catch (e) {
    return e;
  }
};

export default API;
