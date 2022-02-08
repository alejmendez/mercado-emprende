import { Container, Row, Col } from "react-bootstrap";
import Packages from "./Packages";
import MenuHome from "./MenuHome";
import Banner from "./Banner";
import "./Home.scss";
import getTasks from "../../services/getTasks";

const title = "Task Area";
const tasks = getTasks();

const Home = () => {
  return (
    <Container className="home-page">
      <Banner />
      <MenuHome />

      <Row>
        <Col>
          <h2 className="title-home">{title}</h2>
        </Col>
      </Row>
      <Packages tasks={tasks} />
    </Container>
  );
};

export default Home;
