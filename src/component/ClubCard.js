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
    <div className="card club-card">
      <img src={props.imgurl} className="card-img-top" alt="Fissure in Sandstone"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.school}</p>

        <a href="#!" className="btn btn-primary">Button</a>
      </div>
    </div>
  );
}

export default ClubCard;