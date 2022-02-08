import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./Information.scss";

const Information = () => {
  return (
    <Container className="information-page">
      <Back />

      <Row>
        <Col>
          <h1>Information</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Information;
