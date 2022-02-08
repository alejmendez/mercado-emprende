import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../components/back/Back";

const Error = () => {
  return (
    <Container className="error-page">
      <Back />

      <Row>
        <Col>
          <h1>Error</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
