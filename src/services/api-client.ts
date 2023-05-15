import axios from "axios";
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:
    {
        key:'b5bcff53c6e64fe8b7994a5ea9864714'
    }

    
})