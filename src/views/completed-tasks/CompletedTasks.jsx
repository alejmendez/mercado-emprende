import { Container, Row, Col, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Back from "../../components/back/Back";
import CompletedTask from "./CompletedTask";
import getCompletedTasks from "../../services/getCompletedTasks";

import "./CompletedTasks.scss";

const CompletedTasks = () => {
  const navigate = useNavigate();
  const completedTasks = getCompletedTasks();
  return (
    <Container className="completed-tasks-page">
      <Back />

      <h1>Completed Tasks</h1>
      <span>Last tasks performed</span>
      <Row>
        <Col>
          {completedTasks.map((task) => (
            <CompletedTask task={task} key={task.id} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination>
            <Pagination.First />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default CompletedTasks;
