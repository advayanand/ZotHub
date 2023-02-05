import axios from "axios";
import config from "./config";

const getClubList = (school) => {
    return axios.get(`${config.SERVER_API_URL}/api/${school}/clubs`)
}
const getOneClub = (school, clubId) => {
    return axios.get(`${config.SERVER_API_URL}/api/${school}/club/${clubId}`)
}

export {
    getClubList,
    getOneClub
};
