import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Back from "../../components/back/Back";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faTasks, faBriefcase, faHistory, faMoneyBillAlt, faGift } from "@fortawesome/free-solid-svg-icons";

import "./Profile.scss";

const menuList = [
  {
    title: "Information",
    className: "btn-information",
    icon: <FontAwesomeIcon size="3x" icon={faInfo} />,
  },
  {
    title: "Completed Tasks",
    className: "btn-completed-tasks",
    icon: <FontAwesomeIcon size="3x" icon={faTasks} />,
  },
  {
    title: "My Earnings",
    className: "btn-my-earnings",
    icon: <FontAwesomeIcon size="3x" icon={faBriefcase} />,
  },
  {
    title: "Recharge Requests",
    className: "btn-recharge-requests",
    icon: <FontAwesomeIcon size="3x" icon={faHistory} />,
  },
  {
    title: "Withdrawal Requests",
    className: "btn-withdrawal-requests",
    icon: <FontAwesomeIcon size="3x" icon={faMoneyBillAlt} />,
  },
  {
    title: "Invitation",
    className: "btn-invitation",
    icon: <FontAwesomeIcon size="3x" icon={faGift} />,
  },
];

const Profile = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/recharge/${quantity}`);
  };

  const handleQuantity = (e) => {
    let value = e.target.value;

    setQuantity(value);
  };
  return (
    <Container className="profile-page">
      <Back />

      <Row>
        <Col>
          <div className="profile-balance clearfix">
            BALANCE
            <br />
            <span className="profile-balance-value">200$</span>
            <br />
            <Button
              className="btn-recharge my-3 float-start"
              variant="primary"
              onClick={handleClick}
            >
              Recharge
            </Button>
            <Button
              className="btn-recharge my-3 float-end"
              variant="success"
              onClick={handleClick}
            >
              Withdraw
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        {menuList.map((item, index) => (
          <Col xs="4" key={item.title} title={item.title}>
            <div className="btn-profile-actions text-center">
              <div className={item.className}>
                {item.icon}
              </div>
              {item.title}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Profile;
