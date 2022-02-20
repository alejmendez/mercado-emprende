import { Container, Row, Col } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./Register.scss";

const Register = () => {
  return (
    <Container className="register-page">
      <Back />

      <Row>
        <Col>
          <h1>Register</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
