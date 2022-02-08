import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./Invitation.scss";

const Invitation = () => {
  return (
    <Container className="invitation-page">
      <Back />

      <Row>
        <Col>
          <h1>Invitation</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Invitation;
