import { Container, Row, Col } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./Login.scss";

const Login = () => {
  return (
    <Container className="login-page">
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
