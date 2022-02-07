import { Col, Row } from "react-bootstrap";
import "./Packages.scss";

const Packages = (props) => {
  const tasks = props.tasks;
  return (
    <Row className="packages">
      {tasks.map((task) => (
        <Col key={task.id} md="4" sm="6" xs="6">
          <div className={`package ${task.lock ? "package-lock" : ""}`}>
            <div className="package-title">{task.title}</div>
            <div className="package-text">
              Hold: {task.price}$ <br />
              Bono per day: {task.bonus}$
            </div>
            <img
              className="package-img"
              src="https://i.imgur.com/7CGlecR.jpg"
              alt="img"
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Packages;
