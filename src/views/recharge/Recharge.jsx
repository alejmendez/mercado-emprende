import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Back from "../../components/back/Back";

import "./Recharge.scss";

const Recharge = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/recharge/${quantity}`);
  };

  const handleQuantity = (e) => {
    let value = e.target.value;

    setQuantity(value);
  };
  return (
    <Container className="recharge-page">
      <Back />

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
                type="number"
                placeholder="Enter the amount to send"
                pattern="^[0-9]\d*\.?\d*$"
                onChange={handleQuantity}
                value={quantity}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button className="btn-recharge" variant="success" onClick={handleClick}>
            Confirm
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Recharge;
