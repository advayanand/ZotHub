import axios from "axios";
import config from "./config";

const getUserProfile = (username) => {
    return axios.get(`${config.SERVER_API_URL}/api/profile/${username}`);
}

const addClub = (token, club_id) => {
    return axios.post(`${config.SERVER_API_URL}/api/profile`, {
        token: token,
        action: "add",
        type: "club",
        club: club_id
    })
}

const addTag = (token, tag_id) => {
    return axios.post(`${config.SERVER_API_URL}/api/profile`, {
        token: token,
        action: "add",
        type: "tag",
        tag: tag_id
    })
}

const addEvent = (token, event_id) => {
    return axios.post(`${config.SERVER_API_URL}/api/profile`, {
        token: token,
        action: "add",
        type: "event",
        event: event_id
    })
}

const removeClub = (token, club_id) => {
    return axios.post(`${config.SERVER_API_URL}/api/profile`, {
        token: token,
        action: "remove",
        type: "club",
        club: club_id
    })
}

const removeTag = (token, tag_id) => {
    return axios.post(`${config.SERVER_API_URL}/api/profile`, {
        token: token,
        action: "remove",
        type: "tag",
        tag: tag_id
    })
}

const removeEvent = (token, event_id) => {
    return axios.post(`${config.SERVER_API_URL}/api/profile`, {
        token: token,
        action: "remove",
        type: "event",
        event: event_id
    })
}

export {
    addClub,
    addEvent,
    addTag,
    removeClub,
    removeEvent,
    removeTag
}