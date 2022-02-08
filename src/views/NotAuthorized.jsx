import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../components/back/Back";

const NotAuthorized = () => {
  return (
    <Container className="not-authorized-page">
      <Back />

      <Row>
        <Col>
          <h1>NotAuthorized</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default NotAuthorized;
