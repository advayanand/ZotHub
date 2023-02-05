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

// const fetchImage =(location) =>{

// }


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
    <div className="card event-card">
      <div className="card-body">
        <img src={props.imgurl} className="card-img-top" alt="Hollywood Sign on The Hill" />
        <h5 className="card-title">{props.eventName}</h5>
        <p className="card-text">{props.clubName}</p>
        <p className="card-text">{props.date}</p>
        <p className="card-text">{props.location}</p>
        <a href="#!" className="btn btn-primary" onClick={() => handleClick(props.location)}>Location</a>
      </div>
    </div>
  );
}

export default EventCard;