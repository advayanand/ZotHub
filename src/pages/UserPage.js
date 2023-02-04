import React from "react";
import { Tabs, Tab  } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventCard from "../component/EventCard";
import ClubCard from "../component/ClubCard";


  
function mapToRowEvent(items, m) {
    let output = [];
    for(let i = 0; i < items.length; i += m) {
        output.push(
            <Row key={i}>
                {items.slice(i, i + m).map((item, subIndex) => {
                    return (
                        <EventCard 
                            key={item.id} 
                            eventName={item.eventName} 
                            eventInfo={item.eventInfo}
                            clubName={item.clubName} 
                            location={item.location} 
                            date={item.date} />
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
                            school={item.school}  />
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
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <MyClubs items={props.clubs} />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <UpcomingEvents items={props.events}/>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        <div>In Progress</div>
      </Tab>
    </Tabs>
  );
}

const UserPage = (props) => {
    return (
        <Container>
            <Row>
              <Col>
                <img href={props.profileImgUrl}></img>
              </Col>
              <Col>
                <h1>{props.username}</h1>
              </Col>

            </Row>

            <Row>
                <UserContent clubs={props.clubs} events={props.events}/>
            </Row>
        </Container>
    )
}

export default UserPage;