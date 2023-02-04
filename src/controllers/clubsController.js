import axios from "axios";
import config from "./config";

const getClubList = (school) => {
    return axios.get(`${config.SERVER_API_URL}/${school}/clubs`)
}
const getOneClub = (school, clubId) => {
    return axios.get(`${config.SERVER_API_URL}/${school}/club/${clubId}`)
}