import axios from "axios";
const request = axios.create({
    baseURL: 'http://www.geekfindr-dev-app.xyz',
})

export default request;