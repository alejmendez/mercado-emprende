import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Recharge.scss";

const Recharge = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/recharge/${quantity}`);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <Container className="recharge-page">
      <Row>
        <Col>
          <h2 className="title-home">
            Please enter the amount you are going to send to your account
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="Quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the amount to send"
                onChange={handleQuantity}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="success" onClick={handleClick}>
            Confirm
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Recharge;
