import { Row, Col, Card } from "react-bootstrap";

const MenuHome = () => {
  return (
    <div className="menu-home">
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
    </div>
  );
};

export default MenuHome;
