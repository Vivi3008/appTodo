
import axios from 'axios';

const api = axios.create({
    baseURL: "https://apisupabase.herokuapp.com/"
});

export default api;