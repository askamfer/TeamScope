import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY; // API key securely loaded

const AxiosConnection = axios.create({
  baseURL: `https://www.thesportsdb.com/api/v1/json/${apiKey}`,
});

export default AxiosConnection;
