import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "../styles/EventCard.css"


const handleClick = (address) => {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${address}`
  );
};



const EventCard = (props) => {
  return (
    // <Card className='event-cards' style={{ width: '200rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       {props.eventName}
    //     </Card.Text>
    //     <Card.Text>
    //       {props.clubName}
    //     </Card.Text>
    //     <Card.Text>
    //       {props.date}
    //     </Card.Text>
    //     <Card.Text>
    //       {props.location}
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <div class="card event-card">
      <div class="card-body">
        <img src="" class="card-img-top" alt="Hollywood Sign on The Hill" />
        <h5 class="card-title">{props.eventName}</h5>
        <p class="card-text">{props.clubName}</p>
        <p class="card-text">{props.date}</p>
        <p class="card-text">{props.location}</p>
        <a href="#!" class="btn btn-primary" onClick={() => handleClick(props.location)}>Location</a>
      </div>
    </div>
  );
}

export default EventCard;