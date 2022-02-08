import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./MyEarnings.scss";

const MyEarnings = () => {
  return (
    <Container className="my-earnings-page">
      <Back />

      <Row>
        <Col>
          <h1>my-earnings</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default MyEarnings;
