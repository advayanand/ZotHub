import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import EventScrollView from "../component/EventScrollView";
import config from "../controllers/config";
import useToken from "../helpers/useToken";

const locations = ["New York City, USA", "Paris, France", "Tokyo, Japan"];

const dates = ["2022-06-01", "2022-07-15", "2022-08-30"];

const RecommendationPage = (props) => {
    const [ events, setEvents ] = useState([]);

    // const [ token, setToken ] = useToken();
    const token = '2d848ad4e1380da25a68c49767a291ab532f4f1d';

    useEffect(() => {
        console.log(token);
        const res = axios.get(`${config.SERVER_API_URL}/api/uci/recommendations?token=${token}`);
        console.log(res.data);
        const data = res.data;
        let events = [];
        for (let i = 0; i < data.clubs.length; i++)
        {
            let club = data.clubs[i];
            let event = data.events[i];
            let tag = data.tags[i];
            
            events.push({
                eventName: event[1],
                eventInfo: event[2],
                clubName: club[1],
                location: locations[i],
                id: club[0],
                date: dates[i]
            });
        }

        setEvents(events);
    }, [token]);
    return (
        <Container>
            <h1>Recommended Events For You</h1>
            <EventScrollView items={events} />
        </Container>
    )
}

export default RecommendationPage;