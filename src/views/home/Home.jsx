import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { chunk } from "lodash";
import Packages from "./Packages";

const title = "Task List";
const packages = [
  {
    id: "1",
    title: "Pack 01",
    price: 20,
    bonus: 2,
  },
  {
    id: "2",
    title: "Pack 02",
    price: 50,
    bonus: 3.85,
  },
  {
    id: "3",
    title: "Pack 03",
    price: 200,
    bonus: 13.28,
  },
  {
    id: "4",
    title: "Pack 04",
    price: 800,
    bonus: 53.76,
  },
  {
    id: "5",
    title: "Pack 05",
    price: 2000,
    bonus: 99.2,
  },
  {
    id: "6",
    title: "Pack 06",
    price: 5000,
    bonus: 250,
  },
  {
    id: "7",
    title: "Pack 07",
    price: 10000,
    bonus: 510,
  },
  {
    id: "8",
    title: "Pack 08",
    price: 30000,
    bonus: 1800,
  },
  {
    id: "9",
    title: "Pack 09",
    price: 60000,
    bonus: 3600,
  },
];

const listPackages = chunk(packages, 3);

const Home = () => {
  return (
    <Container>
      <Row align="center">
        <Col>
          <Card>
            <Card.Img src="https://cdn.pixabay.com/photo/2017/01/10/03/54/icon-1968239_960_720.png" />
            <Card.Text>Info</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="https://img.icons8.com/color/2x/restart--v1.png" />
            <Card.Text>Reca</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="https://img.icons8.com/color/2x/external-link.png" />
            <Card.Text>Reti</Card.Text>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="https://i2.wp.com/www.alicanteturismo.com/wp-content/uploads/2021/02/ICONO-REGALO.png?fit=500%2C500&ssl=1" />
            <Card.Text>Invi</Card.Text>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Packages packages={listPackages} />
    </Container>
  );
};

export default Home;
