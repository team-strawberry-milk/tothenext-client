import axios from 'axios';

const instance = axios.create({
  baseURL: `(나중에 정해질 서버 주소)/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {

    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, DELETE, OPTIONS';
    config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default instance;
