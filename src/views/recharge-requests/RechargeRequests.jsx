import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./RechargeRequests.scss";

const RechargeRequest = () => {
  return (
    <Container className="recharge-request-page">
      <Back />

      <Row>
        <Col>
          <h1>Recharge Request</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default RechargeRequest;
