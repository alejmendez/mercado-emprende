import { Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faUserFriends,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

const menu = [
  {
    title: "Home page",
    icon: <FontAwesomeIcon size="2x" icon={faHome} />,
    to: "/",
  },
  {
    title: "Record",
    icon: <FontAwesomeIcon size="2x" icon={faChartLine} />,
    to: "/record",
  },
  {
    title: "My Team",
    icon: <FontAwesomeIcon size="2x" icon={faUserFriends} />,
    to: "/my-team",
  },
  {
    title: "Profile",
    icon: <FontAwesomeIcon size="2x" icon={faUserCircle} />,
    to: "/profile",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <Navbar bg="light" fixed="bottom">
        {menu.map((ele) => (
          <Col key={ele.to} className="footer-menu-element text-center" xs="3">
            <Link to={ele.to}>
              <div className="footer-icon">{ele.icon}</div>
              <div className="footer-title">{ele.title}</div>
            </Link>
          </Col>
        ))}
      </Navbar>
    </div>
  );
};

export default Footer;
