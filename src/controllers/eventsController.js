import axios from "axios";
import config from "./config";


const getAllEventsForSchool = (school) => {
    return axios.get(`${config.SERVER_API_URL}/api/${school}/events`);
}


const getEventForSchoolById = (school, event_id) => {
    return axios.get(`${config.SERVER_API_URL}/api/${school}/events/${event_id}`);
}


export {
    getAllEvents,
    getOneEvent
};

