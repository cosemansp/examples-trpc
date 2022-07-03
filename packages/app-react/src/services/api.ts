import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000, // Default timeout is 0, means no timeout
});

export default api;
