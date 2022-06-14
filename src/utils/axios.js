import axios from 'axios';

const axiosService = axios.create();

axiosService.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.date)) || 'Wrong Services'
)

export default axiosService;