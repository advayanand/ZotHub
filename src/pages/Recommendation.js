import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCarousel from "../component/Carousel";
import EventScrollView from "../component/EventScrollView";
import "../styles/HomePage.css"



const Recommendation = (props) => {
    return (
        <Container>
            <h2 >Recommended For You (by oru ML model) </h2>
            <Row className="upcoming-events">
            </Row>
            <h3>For You</h3>
            <Row className="for-you">
            </Row>

        </Container>
    );
}

export default Recommendation;