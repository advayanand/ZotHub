import axios from "axios";
import config from "./config";


const getAllEventsForSchool = (school) => {
    return axios.get(`${config.SERVER_API_URL}/${school}/events`);
}


const getEventForSchoolById = (school, event_id) => {
    return axios.get(`${config.SERVER_API_URL}/${school}/events/${event_id}`);
}




