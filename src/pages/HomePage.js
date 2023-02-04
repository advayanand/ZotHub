import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCarousel from "../component/Carousel";
import EventScrollView from "../component/EventScrollView";

const slides = [
    {
      id: 1,
      image: '',
      caption: 'Slide 1'
    },
    {
      id: 2,
      image: '',
      caption: 'Slide 2'
    },
    {
      id: 3,
      image: '',
      caption: 'Slide 3'
    },
];

const items = [
    {
      id: 1,
      eventName: 'Music Festival',
      eventInfo: 'A two-day music festival featuring top artists',
      clubName: 'Music Lovers Club',
      location: 'Central Park, NY',
      date: '2023-06-12'
    },
    {
      id: 2,
      eventName: 'Food and Wine Expo',
      eventInfo: 'A celebration of the best food and wine from around the world',
      clubName: 'Foodies Club',
      location: 'Moscone Center, San Francisco',
      date: '2023-07-18'
    },
    {
      id: 3,
      eventName: 'Book Fair',
      eventInfo: 'A gathering of book lovers, writers and publishers',
      clubName: 'Book Club',
      location: 'Washington Convention Center, DC',
      date: '2023-08-20'
    },
    {
      id: 4,
      eventName: 'Tech Conference',
      eventInfo: 'A conference for tech enthusiasts and professionals',
      clubName: 'Tech Club',
      location: 'Las Vegas Convention Center, NV',
      date: '2023-09-12'
    },
    {
      id: 5,
      eventName: 'Sports Expo',
      eventInfo: 'A celebration of sports and fitness',
      clubName: 'Sports Club',
      location: 'Los Angeles Convention Center, CA',
      date: '2023-10-01'
    },
    {
      id: 6,
      eventName: 'Art and Culture Festival',
      eventInfo: 'A festival showcasing art and culture from around the world',
      clubName: 'Art Club',
      location: 'Union Square, NY',
      date: '2023-11-05'
    },
    {
      id: 7,
      eventName: 'Outdoor Adventure Expo',
      eventInfo: 'An expo for outdoor enthusiasts and adventurers',
      clubName: 'Adventure Club',
      location: 'McCormick Place, Chicago',
      date: '2023-12-10'
    },
    {
      id: 8,
      eventName: 'Food Truck Festival',
      eventInfo: 'A festival featuring the best food trucks in the city',
      clubName: 'Foodies Club',
      location: 'Downtown, Seattle',
      date: '2023-01-15'
    },
    {
      id: 9,
      eventName: 'Comic Con',
      eventInfo: 'A convention for comic book fans and pop culture enthusiasts',
      clubName: 'Comic Book Club',
      location: 'San Diego Convention Center, CA',
      date: '2023-02-20'
    },
    {
      id: 10,
      eventName: 'Pet Expo',
      eventInfo: 'A celebration of all things pet-related',
      clubName: 'Pet Club',
      location: 'Miami Beach Convention Center, FL',
      date: '2023-03-15'
    }
  ];
  


const HomePage = (props) => {
    return (
        <Container>
            <Row>
                <EventCarousel slides={slides}/>
            </Row>
            <h1>Upcoming Events</h1>
            <Row>
                <EventScrollView items={items} />
            </Row>
            <h1>For You</h1>
            <Row>
                <EventScrollView items={items} />
            </Row>

        </Container>
    );
}

export default HomePage;