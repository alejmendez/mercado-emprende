import { Container, Row, Col } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./Terms.scss";

const Terms = () => {
  return (
    <Container className="terms-page">
      <Back />

      <Row>
        <Col>
          <h1>Terms</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Terms;
