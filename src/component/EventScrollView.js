import React from "react";
import EventCard from "./EventCard";
import "../styles/EventCardScroll.css"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

const EventScrollView = (props) => {
    return (
        // <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
    <div class="card-group card-group-scroll">
        {props.items.map(item => {
            return <EventCard 
                imgurl={item.imgurl}
                key={item.id} 
                eventName={item.eventName} 
                eventInfo={item.eventInfo}
                clubName={item.clubName} 
                location={item.location} 
                date={item.date} />
        })}

    </div>
    );
}



export default EventScrollView;