import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./WithdrawalRequest.scss";

const WithdrawalRequest = () => {
  return (
    <Container className="withdrawal-request-page">
      <Back />

      <Row>
        <Col>
          <h1>withdrawal-request-page</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default WithdrawalRequest;
