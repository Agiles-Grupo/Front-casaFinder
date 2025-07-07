import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://casafinderapi.mangograss-fe7e2f05.brazilsouth.azurecontainerapps.io/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;