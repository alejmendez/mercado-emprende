import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuHome.scss";

import getHomeMenu from "../../services/getHomeMenu";

const menuList = getHomeMenu();

const MenuHome = () => {
  return (
    <Row className="menu-home" align="center">
      {menuList.map(({ to, key, img, text, title }) => (
        <Col key={key}>
          <Card>
            <Link to={to} title={title}>
              <img src={img} alt={title} />
              {text}
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MenuHome;
