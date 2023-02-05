import React from "react";
import { Tabs, Tab  } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventCard from "../component/EventCard";
import ClubCard from "../component/ClubCard";
import { Image } from 'react-bootstrap';
import "../styles/UserPage.css"
import petr from '../img/petr.png';

  
function mapToRowEvent(items, m) {
    let output = [];
    for(let i = 0; i < items.length; i += m) {
        output.push(
            <Row key={i}>
                {items.slice(i, i + m).map((item, subIndex) => {
                    return (
                      <Col key={subIndex} md={4}>
                        <EventCard 
                            key={item.id} 
                            eventName={item.eventName} 
                            eventInfo={item.eventInfo}
                            clubName={item.clubName} 
                            location={item.location} 
                            date={item.date}
                            imgurl={item.imgurl} />
                      </Col>

                    );
                })}
            </Row>
        )
    }
    return output;
}

function mapToRowClub(items, m) {
    let output = [];
    for(let i = 0; i < items.length; i += m) {
        output.push(
            <Row key={i}>
                {items.slice(i, i + m).map((item, subIndex) => {
                    return (
                      <Col key={subIndex} md={4}>
                        <ClubCard 
                            id={item.id} 
                            name={item.name} 
                            description={item.description}
                            email={item.email} 
                            school={item.school}
                            imgurl={item.imgurl}   />
                      </Col>
                    );
                })}
            </Row>
        )
    }
    return output;
}

const MyClubs = (props) => {
    return (
        <Container>
            {mapToRowClub(props.items, 3)}
        </Container>
    );
}

const UpcomingEvents = (props) => {
    return (
        <Container>
            {mapToRowEvent(props.items, 3)}
        </Container>
    )
}

const UserContent = (props) => {
  return (
    <Tabs
      className="userTabs"
      defaultActiveKey="profile"
      // justify
      fill
    >
      <Tab eventKey="home" title="My Clubs">
        <MyClubs items={props.clubs} />
      </Tab>
      <Tab eventKey="profile" title="Upcoming Events">
        <UpcomingEvents items={props.events}/>
      </Tab>
      <Tab eventKey="longer-tab" title="My Calendar">
        <div>In Progress</div>
      </Tab>
    </Tabs>
  );
}

const UserPage = (props) => {
    return (
        <Container className="userContent">
            <Row className="profile-sec ">
              <Col>
                {/* <img src={petr} class="rounded-circle"> */}
                <Image src={petr} className="profile-img"  roundedCircle/>
              </Col>
              <Col>
                <h1 className="profile-name">{props.username}</h1>
              </Col>
            </Row>

                <UserContent clubs={props.clubs} events={props.events}/>
        </Container>
    )
}

export default UserPage;