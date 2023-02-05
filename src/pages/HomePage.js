import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCarousel from "../component/Carousel";
import EventScrollView from "../component/EventScrollView";
import "../styles/HomePage.css"



const HomePage = (props) => {
    return (
        <Container>
            <Row>
                <EventCarousel slides={props.slides}/>
            </Row>
            <h3 className>Upcoming Events</h3>
            <Row className="upcoming-events">
                <EventScrollView items={props.items} />
            </Row>
            <h3>For You</h3>
            <Row className="for-you">
                <EventScrollView items={props.items2} />
            </Row>

        </Container>
    );
}

export default HomePage;