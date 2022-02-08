import { Container, Row, Col, Button } from "react-bootstrap";
import Back from "../../components/back/Back";

import "./Task.scss";

const Task = () => {
  return (
    <Container className="profile-page">
      <Back />

      <Row>
        <Col>
          <h1>Task</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Task;
