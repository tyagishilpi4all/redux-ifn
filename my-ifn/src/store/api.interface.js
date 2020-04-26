import axios from "axios";

const apiInterface = axios.create({
    baseURL: 'https://infapi.indyfolios.in',
    headers: { 'content-type': 'application/json' }
});

export default apiInterface;

// netision tech.
