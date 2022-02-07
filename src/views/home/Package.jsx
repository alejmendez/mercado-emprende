import { Col, Card, Button } from "react-bootstrap";
import "./Package.scss";

const Package = (props) => {
  return props.packages.map((item) => (
    <Col key={item.id} md="4" sm="6">
      <Card className="package">
        <Card.Img src="https://i.imgur.com/7CGlecR.jpg" />
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            Price: {item.price}$ <br />
            <span>Bonus for day: {item.bonus}$</span>
          </Card.Text>
          <Button color="primary">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default Package;
