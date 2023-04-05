import {Card} from "react-bootstrap";



function BasicExample(props) {

  return (
    
          <Card className="card"  >
            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+props.img} className='img-fluid' style={{height:'20rem'}} />
            <Card.Body className="card-body">
              <Card.Title>{props.name}</Card.Title>
              <Card.Title>Production Date: {props.release_date}</Card.Title>
              <Card.Title>Ratings: {props.vote_count}</Card.Title>
              <Card.Text className="details">{props.details.slice(0,70)}...</Card.Text>
            </Card.Body>
          </Card>
  );
}

export default BasicExample;
