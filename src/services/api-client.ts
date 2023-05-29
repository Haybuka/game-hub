import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params : {
        key : 'b8ee5bfb81e64261b2cb99fb9ae852d4'
    }
})