import axios from "axios";

//api ekath ekka dena url ekai base url ekai ekata karala get karana eka thamai wenne 

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;