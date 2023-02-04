import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EventCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {props.eventName}
        </Card.Text>
        <Card.Text>
          {props.clubName}
        </Card.Text>
        <Card.Text>
          {props.date}
        </Card.Text>
        <Card.Text>
          {props.location}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;