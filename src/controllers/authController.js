import axios from "axios";
import config from "./config";

const signUpUser = (username, email, password) => {
    return axios.post(`${config.SERVER_API_URL}/api/createuser`, {
        username,
        email,
        password,
        school: config.school
    });
}

const loginUser = (username, password) => {
    return axios.post(`${config.SERVER_API_URL}/api-token-auth`, {        
        username,
        password
    });
}

export {
    signUpUser,
    loginUser
};