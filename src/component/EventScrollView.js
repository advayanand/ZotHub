import React from "react";
import EventCard from "./EventCard";

const EventScrollView = (props) => {
    return (
        <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {props.items.map(item => {
            return <EventCard 
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