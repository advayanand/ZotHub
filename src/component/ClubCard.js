import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/ClubCard.css"

const ClubCard = (props) => {
  return (
    // <Card className="club-card" >
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>{props.name}</Card.Title>
    //     <Card.Text>
    //       {props.description}
    //     </Card.Text>
    //     <Card.Text>
    //       {props.email}
    //     </Card.Text>
    //     <Card.Text>
    //       {props.school}
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <div class="card club-card">
      <img src={props.imgurl} class="card-img-top" alt="Fissure in Sandstone"/>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <p class="card-text">{props.email}</p>
        <p class="card-text">{props.school}</p>

        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>
  );
}

export default ClubCard;