import axios from "axios";
const dbmongoApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})
export default dbmongoApi;