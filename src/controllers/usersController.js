import axios from "axios";
import config from "./config";

const getUserProfile = (username) => {
    return axios.get(`${config.SERVER_API_URL}/profile/${username}`);
}